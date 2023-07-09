import {createSelector} from 'reselect';

import {AppState} from '@store/types';
import {NewsListState} from '@store/newsList';

const selectNewsList = ({newsList}: AppState): NewsListState => newsList;

export const getNewsList = createSelector([selectNewsList], (newsList) => newsList);
