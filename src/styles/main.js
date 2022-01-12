import {StyleSheet} from 'react-native';

export const textStyles = StyleSheet.create({
  mainText: {
    color: '#383838',
  },
  cardSubtitles: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: '#383838',
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#E52F6F',
  },
  valueLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#2B2B2B',
  },
  errorDescription: {
    fontFamily: 'Poppins-SemiBold',
    color: 'gray',
    fontSize: 14,
  },
});

export const componentStyles = StyleSheet.create({
  entityCardContainer: {
    marginBottom: 10,
  },
  errorColor: {
    color: '#CC0000',
  },
});
