import {useFetch, useObjState} from '../../hooks';
import {
  getPagQueryURL,
  getSearchQuery,
  isStrEmpty,
  trimMultipleSpaces,
} from '../../util/helpers';

const useController = ({entityURI, searchEntityURI}) => {
  const initialPage = 1;

  const getAPIData = ({...props}) => {
    return getFetchProps({
      ...props,
      entityURI,
      searchEntityURI,
    });
  };
  const [state, updateState] = useObjState({
    entities: [],
    loadingMoreEntities: false,
    refreshing: false,
    page: initialPage,
    api: getAPIData({
      type: GETENTITIESBYPAGE,
      page: initialPage,
      wait: true,
    }),
    inputValue: '',
  });
  const {api} = state;
  const {loading, error} = useFetch({
    url: api.url,
    wait: api.wait,
    retry: api.retry,
    skipError: api.skipError,
    afterLoadAction: data => {
      if (api.afterLoadAction) {
        api.afterLoadAction(data, updateState);
      }
    },
  });
  const getEntities = (value, moreStateProps = {}, wait = false) => {
    const valueAux = value.trim();
    const type = valueAux.length <= 0 ? GETENTITIESBYPAGE : GETENTITIESBYFILTER;
    updateState({
      inputValue: trimMultipleSpaces(value),
      api: getAPIData({
        type,
        value: valueAux,
        page: initialPage,
        retry: !api.retry,
        wait,
      }),
      ...moreStateProps,
    });
  };
  const loadMoreEntities = () => {
    const {page, entities, inputValue, loadingMoreEntities} = state;
    if (loadingMoreEntities) return;
    if (!isStrEmpty(inputValue)) return;
    const pageNum = page + 1;
    updateState({
      loadingMoreEntities: true,
      page: pageNum,
      api: getAPIData({
        skipError: true,
        wait: true,
        type: GETENTITIESBYPAGE,
        page: pageNum,
        additionalInfo: {
          afterLoadAction: (data, updateState) => {
            const entitiesObj = Array.isArray(data)
              ? {entities: [...entities, ...data]}
              : {};
            updateState({
              ...entitiesObj,
              loadingMoreEntities: false,
            });
          },
        },
      }),
    });
  };
  return [
    state,
    {
      getEntities,
      loadMoreEntities,
      updateState,
    },
    {
      loading,
      error,
    },
  ];
};
export const {GETENTITIESBYPAGE, GETENTITIESBYFILTER} = {
  GETENTITIESBYPAGE: 'GETENTITIESBYPAGE',
  GETENTITIESBYFILTER: 'GETENTITIESBYFILTER',
};
export const getFetchProps = ({
  entityURI,
  searchEntityURI,
  type,
  page,
  value,
  wait = false,
  retry = false,
  skipError = false,
  additionalInfo = {},
}) => {
  const api = {
    wait,
    retry,
    skipError,
    afterLoadAction: (data, updateState) => {
      updateState({entities: data, refreshing: false});
    },
  };
  switch (type) {
    case GETENTITIESBYPAGE:
      api.url = getPagQueryURL(entityURI, page);
      break;
    case GETENTITIESBYFILTER:
      api.url = getSearchQuery(searchEntityURI, value);
      break;
    default:
      return {};
  }
  return {...api, ...additionalInfo};
};

export default useController;
