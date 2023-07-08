import {createSlice} from '@reduxjs/toolkit';

import {ProfileState} from './types';
import {removeAuthParams} from '../../utils';

// Начальное состояние
const initialState: ProfileState = {
  data: {},
  isLoading: false, // признак ожидания загрузки
  isAuth: false
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loadStart: (state) => {
      state.data = {};
      state.isLoading = true;
    },
    loadSuccess: (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
      state.isAuth = true;
    },
    loadError: (state) => {
      state.data = {};
      state.isLoading = false;
    },
    logout: () => {
      removeAuthParams();
      return initialState;
    }
  }
});

const profile = profileSlice.reducer;

export const {loadStart, loadSuccess, loadError, logout} = profileSlice.actions;
export {profile};
