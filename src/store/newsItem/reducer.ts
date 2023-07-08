import {createSlice} from '@reduxjs/toolkit';

import {NewsItemState} from './types';
import {fetchDataReducer} from '../common/reducers';

// Начальное состояние
const initialState: NewsItemState = {
  data: {},
  isLoading: false // признак ожидания загрузки
};

const newsItemSlice = createSlice({
  name: 'news-item',
  initialState,
  reducers: fetchDataReducer
});

const newsItem = newsItemSlice.reducer;

export const {loadStart, loadSuccess, loadError} = newsItemSlice.actions;
export {newsItem};
