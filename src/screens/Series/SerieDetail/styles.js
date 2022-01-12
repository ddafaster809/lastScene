import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%',
    flex: 1,
  },
  dayLabel: {
    color: '#707070',
  },
  horizontalList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  noMarginTop: {
    marginTop: 0,
  },
  summaryMarginBottom: {
    marginBottom: 5,
  },
  episodesContainer: {
    width: '100%',
    marginTop: -12,
  },
  seasonContainer: {
    marginBottom: 20,
  },
  seasonLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#E52F6F',
    marginBottom: 10,
  },
  loadingIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default styles;
