import {useFetch, useObjState} from '../../../hooks';
import {getAPIURL} from '../../../util/helpers';

const useController = serie => {
  const [state, updateState] = useObjState({
    selectedEpisode: null,
    showEpisodeModal: false,
    seasons: {},
    noSeasons: 0,
    noEpisodes: 0,
    api: {
      url: getAPIURL(`/shows/${serie.id}/episodes`),
      wait: true,
      afterLoadAction: (data, updateState) => {
        const seasons = groupEpisodesBySeason(data);
        updateState({
          seasons,
          noEpisodes: data.length,
          noSeasons: Object.keys(seasons).length,
        });
      },
      retry: false,
    },
  });
  const {api} = state;
  const {loading, error} = useFetch({
    url: api.url,
    wait: api.wait,
    retry: api.retry,
    afterLoadAction: data => {
      if (api.afterLoadAction) {
        api.afterLoadAction(data, updateState);
      }
    },
  });
  return [state, {updateState}, {loading, error}];
};

const groupEpisodesBySeason = data => {
  const episodes = Array.isArray(data) ? data : [];
  const seasons = {};
  if (episodes.length > 0) {
    episodes.map(ep => {
      const season = ep?.season;
      if (!season) return;
      if (!seasons[season]) seasons[season] = [];
      seasons[season].push(ep);
    });
  }
  return seasons;
};

export default useController;
