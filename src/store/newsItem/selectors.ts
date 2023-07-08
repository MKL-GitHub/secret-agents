import {createSelector} from 'reselect';

import {AppState} from '../types';
import {NewsItemState} from './types';

const selectNewsItem = ({newsItem}: AppState): NewsItemState => newsItem;

export const getNewsItem = createSelector([selectNewsItem], (newsItem) => newsItem);
