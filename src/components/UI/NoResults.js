import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {componentStyles, textStyles} from '../../styles/main';

const NoResults = ({title = 'Oops! Sorry We got no results'}) => {
  return (
    <View style={styles.mainContainer}>
      <Icon
        solid
        size={35}
        name="sad-tear"
        type="font-awesome-5"
        color={componentStyles.errorColor.color}
      />
      <View style={styles.textContainer}>
        <Text style={textStyles.errorDescription}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 10,
  },
});

export default NoResults;
