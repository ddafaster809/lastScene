import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const LoadingIndicator = ({containerStyle, imageStyle, version = 1}) => (
  <View style={[styles.container, containerStyle]}>
    <FastImage
      source={getImageByVersion(version)}
      style={[styles.image, imageStyle]}
    />
  </View>
);

const getImageByVersion = version => {
  switch (version) {
    case 1:
      return require('../../../assets/images/loading.gif');
    case 2:
      return require('../../../assets/images/loadingMoreData.gif');
    default:
      return require('../../../assets/images/loading.gif');
  }
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default LoadingIndicator;
