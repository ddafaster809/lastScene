import {StyleSheet} from 'react-native';

const {create} = StyleSheet;

const {titleColor, titlePadding, zIndGTBackground} = create({
  titleColor: {
    color: '#FFFFFF',
  },
  titlePadding: {
    paddingHorizontal: 33,
  },
  zIndGTBackground: {
    zIndex: 2,
  },
});

const styles = create({
  safeAreaView: {
    width: '100%',
    flex: 1,
  },
  flex: {
    flex: 1,
  },

  darkBackground: {
    opacity: 0.7,
    height: '100%',
    width: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
    zIndex: 1,
  },
  detailContainer: {
    paddingTop: 24,
    ...zIndGTBackground,
    ...titlePadding,
  },
  typeBorderRadius: {
    borderRadius: 25,
  },
  typeContainer: {
    height: 28,
    maxWidth: 100,
    borderColor: '#696969',
    borderWidth: 0.8,
    borderRadius: 25,
  },
  entityTitleContainer: {
    marginTop: 10,
  },
  entityTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    ...titleColor,
  },
  typeDarkOpacity: {
    opacity: 0.6,
    height: '100%',
    width: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
  },
  typeLabelContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  typeLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    ...titleColor,
  },
  mainContainer: {
    backgroundColor: '#000000',
    flex: 1,
  },
  topComponent: {
    height: '43%',
    width: '100%',
    position: 'absolute',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  fadeContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  infoDetailContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  infoTitleContainer: {
    marginLeft: 19,
  },
  infoTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    ...titleColor,
  },
  infoSubtitle: {
    fontFamily: 'Poppins-Italic',
    fontSize: 12,
    opacity: 0.6,
    ...titleColor,
  },
  infoIconContainer: {
    marginTop: 2,
  },
  dividerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  divider: {
    height: 1.3,
    backgroundColor: '#FFFFFF',
    width: '100%',
    opacity: 0.4,
  },
  counterContainer: {
    marginTop: 10,
    ...zIndGTBackground,
  },
  counter: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    ...titlePadding,
    ...titleColor,
  },
  contentContainer: {
    flex: 1,
    ...zIndGTBackground,
  },
  contentBodyContainer: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 12,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: '100%',
    borderRadius: 6,
    flex: 1,
    marginTop: 15,
    marginBottom: 10,
  },
});

export default styles;
