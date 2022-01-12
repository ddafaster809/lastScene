import React from 'react';
import {View, Text} from 'react-native';
import EntityCard from '../EntityCard/EntityCard';
import {textStyles, componentStyles} from '../../styles/main';
import {formatDate} from '../../util/helpers';

const SerieEntityCard = ({
  serie,
  isFavorite,
  onImagePress,
  onFavoritePress,
}) => {
  const genre = !!serie?.genres[0] && serie?.genres[0];
  return (
    <View style={componentStyles.entityCardContainer}>
      <EntityCard
        isFavorite={isFavorite}
        entity={serie}
        title={serie?.name}
        photo={serie?.image?.original}
        onFavoritePress={onFavoritePress}
        onImagePress={onImagePress}>
        <Text style={textStyles.cardSubtitles}>{genre ? genre : 'Other'}</Text>
        <Text style={textStyles.cardSubtitles}>
          Premiered: {formatDate(serie?.premiered)}
        </Text>
      </EntityCard>
    </View>
  );
};

export default SerieEntityCard;
