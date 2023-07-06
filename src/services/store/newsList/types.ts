export const NEWS_LIST_LOAD_START = 'news-list/load-start';
export const NEWS_LIST_LOAD_SUCCESS = 'news-list/load-success';
export const NEWS_LIST_LOAD_ERROR = 'news-list/load-error';

export interface NewsItemType {
  id: string,
  title: string,
  shortText: string,
  imageUrl: string,
}

export interface NewsListData {
  items?: NewsItemType[],
};

export interface NewsListState {
  data: NewsListData,
  isLoading: boolean,
};



