import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import thunk from 'redux-thunk';

import {rootReducer} from '@store/rootReducer';
import {services} from '@services';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument(services)]
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export {store};
