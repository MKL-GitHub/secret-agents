import {createSelector} from 'reselect';
import {AppState} from '../types';
import {NewsListState} from './types';

const selectNewsList = (state: AppState): NewsListState => state.newsList;

export const newsListSelector = createSelector(
  [selectNewsList],
  newsList => newsList,
);
