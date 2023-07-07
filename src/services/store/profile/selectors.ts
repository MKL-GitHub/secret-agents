import {User} from './types';
import {createSelector} from 'reselect';
import {AppState} from '../types';

const selectUser = (state: AppState): User => ({
  avatarUrl: state.profile.data.user?.avatarUrl,
  username: state.profile.data.user?.username,
});

const selectIsAuthIsLoading = (state: AppState) => ({
  isAuth: state.profile.isAuth,
  isLoading: state.profile.isLoading,
});

export const getUser = createSelector([selectUser], user => user);

export const getIsAuthIsLoading = createSelector(
  [selectIsAuthIsLoading],
  state => ({
    isAuth: state.isAuth,
    isLoading: state.isLoading,
  }),
);
