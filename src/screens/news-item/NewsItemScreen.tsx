import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteProp} from '@react-navigation/native';

import {getFormattedDate, getLinksFromString} from '@utils';
import {LinkedTextType} from '@types';
import {Loading, NewsItemDetails} from '@components';
import {getNewsItem, loadNewsItem} from '@store/newsItem';

interface NewsItemScreenRouteParams {
  id: string;
}

interface NewsItemScreenProps {
  route?: RouteProp<{params: NewsItemScreenRouteParams}>;
}

const NewsItemScreen: FC<NewsItemScreenProps> = ({route}) => {
  const id = route?.params.id;
  const dispatch = useDispatch();

  const [linkedText, setLinkedText] = useState<LinkedTextType[]>([]);

  useEffect(() => {
    // @ts-ignore
    id && dispatch(loadNewsItem(id));
  }, [dispatch, id]);

  const newsItem = useSelector(getNewsItem);

  useEffect(() => {
    newsItem.data.body && setLinkedText(getLinksFromString(newsItem.data.body));
  }, [newsItem.data.body]);

  return (
    <Loading isLoading={newsItem.isLoading}>
      <NewsItemDetails
        createdAt={newsItem.data.createdAt && getFormattedDate(newsItem.data.createdAt)}
        linkedText={linkedText}
        imageAdditionalUrl={newsItem.data.imageAdditionalUrl}
        imageUrl={newsItem.data.imageUrl}
        shortText={newsItem.data.shortText}
        title={newsItem.data.title}
      />
    </Loading>
  );
};

export default NewsItemScreen;
