import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useEntityNavigation, useFavoriteSeriesHelper} from '../../../hooks';
import Header from '../../../components/UI/Header';
import NoResults from '../../../components/UI/NoResults';
import SerieEntityCard from '../../../components/SerieEntityCard/SerieEntityCard';

const Favorite = () => {
  const [series, setSeries] = useState([]);
  const {favoriteSeries, onFavoritePress} = useFavoriteSeriesHelper();
  const onEntityNavigation = useEntityNavigation('serie', 'SerieDetail');
  useEffect(() => {
    setSeries(favoriteSeries.sort(sortAlphabetically));
  }, [favoriteSeries]);

  return (
    <View style={styles.flexContainer}>
      <Header title="Favorite Series" />
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={series}
          keyExtractor={({id}) => String(id)}
          ListEmptyComponent={
            <NoResults title={`Oops! You haven't add any series to favorite`} />
          }
          renderItem={({item: serie}) => {
            return (
              <SerieEntityCard
                onFavoritePress={onFavoritePress}
                onImagePress={onEntityNavigation}
                serie={serie}
                isFavorite={true}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
const sortAlphabetically = (a, b) => {
  var nameA = a.name.toLowerCase(),
    nameB = b.name.toLowerCase();
  //sort string ascending
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0; //default return value (no sorting)
};
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    width: '100%',
  },
  listContainer: {
    marginTop: 5,
    flex: 1,
    paddingHorizontal: 13,
  },
});
export default Favorite;
