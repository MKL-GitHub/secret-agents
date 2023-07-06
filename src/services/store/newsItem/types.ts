export const NEWS_ITEM_LOAD_START = 'news-item/load-start';
export const NEWS_ITEM_LOAD_SUCCESS = 'news-item/load-success';
export const NEWS_ITEM_LOAD_ERROR = 'news-item/load-error';

export interface NewsItemType {
  title?: string,
  imageUrl?: string,
  imageAdditionalUrl?: string,
  body?: string,
  shortText?: string,
  createdAt?: Date,
};

export interface NewsItemState {
  data: NewsItemType,
  isLoading: boolean,
};



