import { applyMiddleware, combineReducers, createStore } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import { ConfigStoreType } from '../config';

export default function createStoreRedux(services: any, config: ConfigStoreType): any {
  return createStore(combineReducers(reducers), applyMiddleware(
    thunk.withExtraArgument(services)
  ));
}
