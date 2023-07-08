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
