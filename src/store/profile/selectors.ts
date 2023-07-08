import {createSelector} from 'reselect';

import {AppState} from '../types';

const selectUser = ({profile}: AppState) => ({
  avatarUrl: profile.data.user?.avatarUrl,
  username: profile.data.user?.username
});

const selectIsAuthIsLoading = ({profile}: AppState) => ({
  isAuth: profile.isAuth,
  isLoading: profile.isLoading
});

export const getUser = createSelector([selectUser], (user) => user);

export const getIsAuthIsLoading = createSelector([selectIsAuthIsLoading], (state) => ({
  isAuth: state.isAuth,
  isLoading: state.isLoading
}));
