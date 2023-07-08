import {createSelector} from 'reselect';

import {AppState} from '../types';
import {NewsListState} from './types';

const selectNewsList = ({newsList}: AppState): NewsListState => newsList;

export const getNewsList = createSelector([selectNewsList], (newsList) => newsList);
