import {StyleSheet} from 'react-native';

const {create} = StyleSheet;

const styles = create({
  container: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 7,
  },
  bodyContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  entityDetailContainer: {
    width: '65%',
    paddingLeft: 20,
    paddingVertical: 15,
    paddingRight: 12,
    flex: 1,
  },
  detailContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  entityTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  addToFavoriteContainer: {
    flexDirection: 'row',
    zIndex: 2,
  },
  atfLabelContainer: {
    marginLeft: 6,
    marginTop: 2,
  },
  addToFavoriteLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#8D8D8D',
  },
  imageContainer: {
    width: '35%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  addedAsFavorite: {
    color: '#EB2F71',
  },
});

export {styles};
