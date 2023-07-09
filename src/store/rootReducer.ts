import {combineReducers} from '@reduxjs/toolkit';

import {profile} from '@store/profile';
import {newsList} from '@store/newsList';
import {newsItem} from '@store/newsItem';

// @ts-ignore
export const rootReducer = combineReducers({
  profile,
  newsList,
  newsItem
});
