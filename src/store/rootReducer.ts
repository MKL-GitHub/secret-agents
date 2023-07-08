import {combineReducers} from '@reduxjs/toolkit';

import {profile} from './profile';
import {newsList} from './newsList';
import {newsItem} from './newsItem';

// @ts-ignore
export const rootReducer = combineReducers({
  profile,
  newsList,
  newsItem
});
