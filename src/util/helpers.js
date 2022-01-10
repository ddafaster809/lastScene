import {DateTime} from 'luxon';
import {TVMAZE_BASE_URL} from './constants';

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
export const getSearchQuery = (uri, value) => `${getAPIURL(uri)}?q=${value}`;
export const isStrEmpty = str => {
  if (!str) return true;
  if (str.trim().length <= 0) return true;
  return false;
};
export const trimMultipleSpaces = str => str.replace(/\s\s+/g, ' ');
