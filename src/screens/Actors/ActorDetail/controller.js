import {useFetch, useObjState} from '../../../hooks';
import {getAPIURL} from '../../../util/helpers';

const useController = actor => {
  const [state, updateState] = useObjState({     
    api: {
      url: getAPIURL(`/people/${actor?.id}/castcredits?embed=show`),
      wait: true,
      retry: false,
    },
  });
  const {api} = state;
  const {data, loading, error} = useFetch({
    url: api.url,
    wait: api.wait,
    retry: api.retry,    
  });
  return [state, {updateState}, {loading, error, data}];
};


export default useController;
