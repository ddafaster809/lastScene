import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const LoadingIndicator = ({containerStyle,imageStyle}) => (
  <View style={[styles.container, containerStyle]}>
    <FastImage
     source={require('../../../assets/images/loading.gif')} 
     style={[styles.image, imageStyle,]}
     />
  </View>
);

const styles = StyleSheet.create({
    container:{
        height: 70,
        width: 70,
        alignSelf: 'center'
    },
    image:{
        width: '100%',
        height: '100%',
    }
})

export default LoadingIndicator;
