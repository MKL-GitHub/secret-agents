import {NewsItemState} from './newsItem/types';
import {NewsListState} from './newsList/types';
import {ProfileState} from './profile/types';

export interface AppState {
  profile: ProfileState;
  newsList: NewsListState;
  newsItem: NewsItemState;
}
