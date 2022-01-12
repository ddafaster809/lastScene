import React from 'react';
import {View} from 'react-native';

const Faded = ({height, children, direction = 'up', color = '#000000'}) => {
  let i;
  let collection = [];
  const divisor = 1000;
  const pi = 1 / divisor;

  let pixelsStyle = {
    width: '100%',
    position: 'absolute',
    height: height,
    flexDirection: 'column',
    bottom: 0,
  };
  if (direction === 'up') {
    pixelsStyle = {
      ...pixelsStyle,
      bottom: 0,
    };
    collection.push(0);
    i = pi;
    while (i < 1) {
      collection.push(i);
      i += pi;
    }
    collection.push(1);
  } else {
    pixelsStyle = {
      ...pixelsStyle,
      top: 0,
    };
    collection.push(1);
    i = 1.0;
    while (i > 0) {
      collection.push(i);
      i -= pi;
    }
    collection.push(0);
  }
  let r = 0,
    g = 0,
    b = 0;
  if (hexToRgb(color)) {
    r = hexToRgb(color).r;
    g = hexToRgb(color).g;
    b = hexToRgb(color).b;
  }
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={pixelsStyle}>
        {collection.map((o, key) => (
          <View
            key={key}
            style={{
              height: height / divisor,
              backgroundColor: `rgba(${r}, ${g}, ${b}, ${o + 0.008})`,
            }}
          />
        ))}
      </View>
      {children}
    </View>
  );
};

const hexToRgb = hex => {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
};

export default Faded;
