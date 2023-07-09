import {ProfileState} from '@store/profile';
import {NewsListState} from '@store/newsList';
import {NewsItemState} from '@store/newsItem';

export interface AppState {
  profile: ProfileState;
  newsList: NewsListState;
  newsItem: NewsItemState;
}

export interface FetchDataType {
  data: {[key: string]: any};
  isLoading: boolean;
}
