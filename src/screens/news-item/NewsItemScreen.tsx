import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import newsItemActions from '../../services/store/newsItem/actions';
import {RouteProp} from '@react-navigation/native';
import {newsItemSelector} from '../../services/store/newsItem/selectors';
import Loading from '../../components/loading/Loading';
import {getLinksFromString} from '../../utils/getLinksFromString';
import {getFormattedDate} from '../../utils/getFormattedDate';
import {LinkedTextType} from '../../types';
import NewsItemDetails from '../../components/news-item-details/NewsItemDetails';

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
    id && dispatch(newsItemActions.load(id));
  }, [dispatch, id]);

  const newsItem = useSelector(newsItemSelector);

  useEffect(() => {
    newsItem.data.body && setLinkedText(getLinksFromString(newsItem.data.body));
  }, [newsItem.data.body]);

  return (
    <Loading isLoading={newsItem.isLoading}>
      <NewsItemDetails
        createdAt={
          newsItem.data.createdAt && getFormattedDate(newsItem.data.createdAt)
        }
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
