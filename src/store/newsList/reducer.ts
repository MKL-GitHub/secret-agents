import {createSlice} from '@reduxjs/toolkit';

import {NewsListState} from './types';
import {fetchDataReducer} from '../common/reducers';

// Начальное состояние
const initialState: NewsListState = {
  data: {},
  isLoading: false // признак ожидания загрузки
};

const newsListSlice = createSlice({
  name: 'news-list',
  initialState,
  reducers: fetchDataReducer
});

const newsList = newsListSlice.reducer;

export const {loadStart, loadSuccess, loadError} = newsListSlice.actions;
export {newsList};
