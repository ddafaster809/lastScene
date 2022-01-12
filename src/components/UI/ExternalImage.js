import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {isStrEmpty} from '../../util/helpers';

const ExternalImage = ({imageUrl, defaultImage, ...props}) => {
  const [isImageValid, setIsImageValid] = useState(!isStrEmpty(imageUrl));
  return (
    <FastImage
      {...props}
      onError={() => setIsImageValid(false)}
      resizeMode="stretch"
      source={isImageValid ? {uri: imageUrl} : defaultImage}
    />
  );
};

export default ExternalImage;
