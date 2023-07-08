export interface NewsItemType {
  id: string;
  title: string;
  shortText: string;
  imageUrl: string;
}

export interface NewsListData {
  items?: NewsItemType[];
}

export interface NewsListState {
  data: NewsListData;
  isLoading: boolean;
}
