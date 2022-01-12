import React from 'react';
import {View, Text} from 'react-native';
import {useEntityNavigation} from '../../hooks';
import EntityListing from '../../components/EntityListing/EntityListing';
import EntityCard from '../../components/EntityCard/EntityCard';
import {formatDate} from '../../util/helpers';
import {textStyles, componentStyles} from '../../styles/main';

const Actors = () => {
  const onEntityNavigation = useEntityNavigation('actor', 'ActorDetail');
  return (
    <EntityListing
      entityTitle="Actors"
      entityURI="/people"
      searchEntityURI="/search/people"
      searchInputPlaceHolder="Search Actors by name"
      listKeyExtractor={actorData => {
        const {id} = getActorDataProp(actorData);
        return String(id);
      }}
      renderEntity={({item: actorData}) => {
        const actor = getActorDataProp(actorData);
        return (
          <View style={componentStyles.entityCardContainer}>
            <EntityCard
              showIsFavorite={false}
              entity={actor}
              title={actor?.name}
              photo={actor?.image?.original}
              onImagePress={onEntityNavigation}>
              <Text style={textStyles.cardSubtitles}>
                {actor?.gender ? actor?.gender : 'Gender: Unknown'}
              </Text>
              <Text style={textStyles.cardSubtitles}>
                Date of Birth: {formatDate(actor?.birthday)}
              </Text>
              {actor?.deathday && (
                <Text style={textStyles.cardSubtitles}>
                  Date of Death: {formatDate(actor?.deathday)}
                </Text>
              )}
            </EntityCard>
          </View>
        );
      }}
    />
  );
};

const getActorDataProp = actorData => actorData?.person ?? actorData;

export default Actors;
