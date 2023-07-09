import {createSlice} from '@reduxjs/toolkit';

import {fetchDataReducer} from '@store/common/reducers';
import {NewsListState} from '@store/newsList';

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
