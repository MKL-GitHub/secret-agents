import {FetchDataType} from '@store/types';

export const fetchDataReducer = {
  loadStart: (state: FetchDataType) => {
    state.data = {};
    state.isLoading = true;
  },
  loadSuccess: (state: FetchDataType, action: {payload: {data: {[key: string]: any}}}) => {
    state.data = action.payload.data;
    state.isLoading = false;
  },
  loadError: (state: FetchDataType) => {
    state.data = {};
    state.isLoading = false;
  }
};
