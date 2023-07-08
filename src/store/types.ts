import {ProfileState} from './profile';
import {NewsListState} from './newsList';
import {NewsItemState} from './newsItem';

export interface AppState {
  profile: ProfileState;
  newsList: NewsListState;
  newsItem: NewsItemState;
}

export interface FetchDataType {
  data: {[key: string]: any};
  isLoading: boolean;
}
