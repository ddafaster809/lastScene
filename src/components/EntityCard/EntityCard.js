import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ExternalImage from '../UI/ExternalImage';
import {Icon} from 'react-native-elements';
import {textStyles} from '../../styles/main';
import {styles} from './styles';

const EntityCard = memo(
  ({
    entity,
    title,
    photo,
    onImagePress,
    showIsFavorite = true,
    isFavorite = false,
    onFavoritePress,
    children,
  }) => {
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.entityDetailContainer}>
            <View style={styles.detailContainer}>
              <View>
                <Text
                  numberOfLines={1}
                  style={[styles.entityTitle, textStyles.mainText]}>
                  {title}
                </Text>
                {children}
              </View>
              {showIsFavorite && (
                <TouchableOpacity
                  onPress={()=>{
                    onFavoritePress(isFavorite, entity)
                  }}
                  style={styles.addToFavoriteContainer}>
                  <View>
                    <Icon
                      solid={isFavorite}
                      size={20}
                      name="star"
                      type="font-awesome-5"
                      color={isFavorite ? '#FFFF00' : '#959697'}
                    />
                  </View>

                  <View style={styles.atfLabelContainer}>
                    <Text
                      style={[
                        styles.addToFavoriteLabel,
                        isFavorite && styles.addedAsFavorite,
                      ]}>
                      {isFavorite ? 'Favorite' : 'Add as favorite'}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              onImagePress(entity);
            }}
            style={styles.imageContainer}>
            <ExternalImage
              resizeMode="stretch"
              style={styles.image}
              imageUrl={photo}
              defaultImage={require('../../../assets/images/notAvailable.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

export default EntityCard;
