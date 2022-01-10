import {useRef, useEffect} from 'react';
import {API_WAIT_TIME} from '../util/constants';
import {useObjState} from './useObjState';

export const useFetch = ({url, retry, wait = false}) => {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  };
  const isMounted = useRef(true);
  const [state, updateState] = useObjState(initialState);
  const setStateIfMounted = (obj, shouldWait) => {
    console.log("isMounted.current>>>", isMounted.current)
    if (isMounted.current) {
      if (shouldWait) {
        setTimeout(() => {
          updateState(obj);
        }, API_WAIT_TIME);
        return;
      }
      updateState(obj);
    }
  };
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    console.log("url>>>", url)
    setStateIfMounted(initialState);
    fetch(url)
      .then(response => response.json())
      .then(data =>
        setStateIfMounted(
          {
            data,
            loading: false,
          },
          wait,
        ),
      )
      .catch(error =>
        setStateIfMounted(
          {
            error,
            loading: false,
          },
          wait,
        ),
      );
  }, [url, retry]);
  return state;
};

export default useFetch;
