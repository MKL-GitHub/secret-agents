import {createSlice} from '@reduxjs/toolkit';

import {fetchDataReducer} from '@store/common/reducers';
import {NewsItemState} from '@store/newsItem';

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
