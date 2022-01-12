import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    maxHeight: '85%',
    width: '90%',
    padding: 0,
    borderRadius: 6,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 6,
  },
  leftContainer: {
    position: 'absolute',
    left: 12,
    top: 11,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#141414',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  imageContainer: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 6,
    borderWidth: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    marginTop: 20,
  },
  valueLabelContainer: {
    marginBottom: 5,
  },
  summaryContainer: {
    marginTop: 10,
  },
});

export default styles;
