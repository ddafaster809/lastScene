import {DateTime} from 'luxon';
import {Dimensions} from 'react-native';
import {TVMAZE_BASE_URL} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const formatDate = isoDate => {
  const date = DateTime.fromISO(isoDate);
  return date.isValid
    ? `${date.toFormat('ccc')} • ${date.toFormat('LLL dd, yyyy ')}`
    : 'To Be Determined';
};
export const getAPIURL = uri => {
  return TVMAZE_BASE_URL + uri;
};
// Get API URL with pagination query param
export const getPagQueryURL = (uri, pagNum) =>
  `${getAPIURL(uri)}?page=${pagNum}`;
export const getSearchQuery = (uri, value) =>
  `${getAPIURL(uri)}?q=${encodeURIComponent(value)}`;
export const isStrEmpty = str => {
  if (!str) return true;
  if (str.trim().length <= 0) return true;
  return false;
};
export const trimMultipleSpaces = str => str.replace(/\s\s+/g, ' ');
export const hp = percentage => {
  const {height: viewportHeight} = Dimensions.get('window');
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
};
export const wp = percentage => {
  const {width: viewportWidth} = Dimensions.get('window');
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};
export const retryFetch = (api, updateState) => {
  updateState({api: {...api, retry: !api.retry, wait: true}});
};
export const getFavoriteSeries = async () => {
  try {
    const series = await AsyncStorage.getItem('favoriteSeries');
    if (series) return JSON.parse(series);
    return [];
  } catch (error) {
    return [];
  }
};
export const setFavoriteSeriesInStorage = async newSeries => {
  try {
    await AsyncStorage.setItem('favoriteSeries', JSON.stringify(newSeries));
  } catch (e) {}
};
