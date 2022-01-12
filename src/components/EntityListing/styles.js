import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    paddingHorizontal: 13,
    flex: 1,
  },
  listContainer: {
    marginTop: 5,
    flex: 1,
  },
  footerIndicatorContainer: {
    marginTop: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLoadingIndicator: {
    height: 25,
    width: 25,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
