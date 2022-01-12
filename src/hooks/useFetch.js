import {useRef, useEffect} from 'react';
import {API_WAIT_TIME} from '../util/constants';
import {useObjState} from './useObjState';

export const useFetch = ({
  url,
  retry,
  wait = false,
  skipError = false,
  afterLoadAction = data => {},
}) => {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  };
  const isMounted = useRef(true);
  const [state, updateState] = useObjState(initialState);
  const setStateData = obj => {
    updateState(obj);
    if (obj?.data) {
      afterLoadAction(obj?.data);
    }
  };
  const setStateIfMounted = (obj, shouldWait = false) => {
    if (isMounted.current) {
      if (shouldWait) {
        setTimeout(() => {
          setStateData(obj);
        }, API_WAIT_TIME);
        return;
      }
      setStateData(obj);
    }
  };
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    setStateIfMounted(initialState);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setStateIfMounted(
          {
            data,
            loading: false,
          },
          wait,
        );
      })
      .catch(error => {
        const dummyData = skipError ? {data: []} : {};
        setStateIfMounted(
          {
            ...dummyData,
            error: !skipError ? error : null,
            loading: false,
          },
          wait,
        );
      });
  }, [url, retry]);
  return state;
};

export default useFetch;
