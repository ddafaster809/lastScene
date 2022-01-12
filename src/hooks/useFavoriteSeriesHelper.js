import {useContext, useCallback} from 'react';
import {FavoriteContext} from '../context/Favorite';
import {setFavoriteSeriesInStorage} from '../util/helpers';

export const useFavoriteSeriesHelper = () => {
  const {favoriteSeries, setFavoriteSeries} = useContext(FavoriteContext);
  const onFavoritePress = useCallback(
    (isFavorite, {id, name, image, premiered, network, genres}) => {
      let newSeries;
      if (!isFavorite) {
        newSeries = [
          ...favoriteSeries,
          {
            id,
            name,
            image,
            premiered,
            network,
            genres,
          },
        ];
      } else {
        newSeries = favoriteSeries.filter(({id: serieId}) => serieId !== id);
      }

      setFavoriteSeries(newSeries);
      setFavoriteSeriesInStorage(newSeries);
    },
    [favoriteSeries],
  );
  return {
    favoriteSeries,
    onFavoritePress,
  };
};
