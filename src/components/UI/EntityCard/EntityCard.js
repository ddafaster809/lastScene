import React, {useState, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {text} from '../../../styles/main';
import {isStrEmpty} from '../../../util/helpers';
import {styles} from './styles';

const EntityCard = memo(({
  isFavorite = true,
  title,
  photo,
  // onImagePress,
  // onAddToFavorite,
  // children,
}) => {
  const isPhotoValid= true;
  return (
    
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.entityDetailContainer}>
          <View style={styles.detailContainer}>
            <View>
              <Text
                numberOfLines={1}
                style={[styles.entityTitle, text.mainText]}>
                {title}
              </Text>
              
            </View>
            <TouchableOpacity
              onPress={()=>{}}
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
          </View>
        </View>
        <TouchableOpacity onPress={()=>{}} style={styles.imageContainer}>
          {/* <FastImage
            // onError={() => setIsPhotoValid(false)}
            resizeMode="stretch"
            style={styles.image}
            source={
              isPhotoValid
                ? {uri: photo}
                : require('../../../../assets/images/notAvailable.png')
            }
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default EntityCard;
