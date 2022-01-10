import {useFetch, useObjState} from '../../hooks';
import {getPagQueryURL, getSearchQuery, trimMultipleSpaces} from '../../util/helpers';

const useController = () => {
  const [state, updateState] = useObjState({
    api: getAPIActions({type: APIACTIONS.GETSHOWS, page: 1, wait: true}),
    inputValue: '',
  });
  const {api} = state;
  const {loading, data, error} = useFetch({
    url: api.url,
    wait: api.wait,
    retry: api.retry,
  });
  const filterShows = value => {
    const valueAux = value.trim();    
    const type =
      valueAux.length <= 0 ? APIACTIONS.GETSHOWS : APIACTIONS.GETSHOWSFILTERING;
    updateState({
      inputValue: trimMultipleSpaces(value),
      api: getAPIActions({type, value: valueAux, page: 1}),
    });
  };
  return [
    state,
    {filterShows},
    {
      loading,
      data,
      error,
    },
  ];
};

const showsUri = '/shows';
const searchShowsUri = '/search/shows';
export const APIACTIONS = {
  GETSHOWS: 'GETSHOWS',
  GETSHOWSFILTERING: 'GETSHOWSFILTERING',
};
export const getAPIActions = ({type, page, value, wait = false, retry=false,}) => {
  switch (type) {
    case APIACTIONS.GETSHOWS:
      return {
        wait,
        page,
        retry,
        url: getPagQueryURL(showsUri, page),
      };
    case APIACTIONS.GETSHOWSFILTERING:
      return {
        wait,
        retry,
        url: getSearchQuery(searchShowsUri, value),
      };
    default:
      return {};
  }
};
export const getShowProp = item => item?.show ?? item;

export default useController;
