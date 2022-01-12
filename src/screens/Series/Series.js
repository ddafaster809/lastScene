import React from 'react';
import {useFavoriteSeriesHelper, useEntityNavigation} from '../../hooks';
import EntityListing from '../../components/EntityListing/EntityListing';
import SerieEntityCard from '../../components/SerieEntityCard/SerieEntityCard';

const Series = () => {
  const {favoriteSeries, onFavoritePress} = useFavoriteSeriesHelper();
  const onEntityNavigation = useEntityNavigation('serie', 'SerieDetail');
  return (
    <EntityListing
      entityTitle="Series"
      entityURI="/shows"
      searchEntityURI="/search/shows"
      searchInputPlaceHolder="Search series by name"
      listKeyExtractor={serieData => {
        const {id} = getSerieDataProp(serieData);
        return String(id);
      }}
      renderEntity={({item: serieData}) => {
        const serie = getSerieDataProp(serieData);
        const isFavorite = isSerieFavorite(serie?.id, favoriteSeries);
        return (
          <SerieEntityCard
            onFavoritePress={onFavoritePress}
            onImagePress={onEntityNavigation}
            serie={serie}
            isFavorite={isFavorite}
          />
        );
      }}
    />
  );
};
export const getSerieDataProp = serieData => serieData?.show ?? serieData;
const isSerieFavorite = (idSerie, favoriteSeries) => {
  return !!favoriteSeries.find(({id}) => idSerie === id);
};

export default Series;
