export interface NewsItemType {
  title?: string;
  imageUrl?: string;
  imageAdditionalUrl?: string;
  body?: string;
  shortText?: string;
  createdAt?: Date;
}

export interface NewsItemState {
  data: NewsItemType;
  isLoading: boolean;
}
