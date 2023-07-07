export const PROFILE_LOAD_START = 'profile/load-start';
export const PROFILE_LOAD_SUCCESS = 'profile/load-success';
export const PROFILE_LOAD_ERROR = 'profile/load-error';

export const PROFILE_LOGOUT = 'profile/logout';

export interface HeadersType {
  'access-token': string;
  client: string;
  uid: string;
}

export interface User {
  avatarUrl?: string;
  username?: string;
}

export interface ProfileData {
  headers?: HeadersType;
  user?: User;
}

export interface ProfileState {
  data: ProfileData;
  isLoading: boolean;
  isAuth: boolean;
}
