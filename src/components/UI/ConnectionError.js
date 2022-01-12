import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {componentStyles, textStyles} from '../../styles/main';

const ConnectionError = ({containerStyle, onRetry = () => {}}) => (
  <View style={[styles.container, containerStyle]}>
    <Icon
      solid
      size={30}
      name="exclamation-triangle"
      type="font-awesome-5"
      color={componentStyles.errorColor.color}
    />
    <View style={styles.descriptionContainer}>
      <Text style={textStyles.errorDescription}>Connection Error</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.button}
        title={'Retry'}
        onPress={onRetry}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 80,
  },
  descriptionContainer: {
    marginTop: 10,
  },
  button: {
    width: '100%',
    borderRadius: 6,
    height: 42,
    borderColor: '#141414',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 25,
  },
  buttonTitle: {
    textAlign: 'center',
    color: '#141414',
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
});

export default ConnectionError;
