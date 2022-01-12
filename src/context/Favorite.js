import React, {useState, createContext, useEffect} from 'react';
import {getFavoriteSeries} from '../util/helpers';

const FavoriteProvider = ({children}) => {
  const [favoriteSeries, setFavoriteSeries] = useState([]);
  useEffect(() => {
    const getFavoriteSeriesAsync = async () => {
      let series = await getFavoriteSeries();
      setFavoriteSeries(series);
    };
    getFavoriteSeriesAsync();
  }, []);
  return (
    <FavoriteContext.Provider value={{favoriteSeries, setFavoriteSeries}}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const FavoriteContext = createContext({});

export default FavoriteProvider;
