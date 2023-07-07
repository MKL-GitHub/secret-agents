import React, {FC, useEffect} from 'react';
import {FlatList} from 'react-native';
import NewsItem from '../../components/news-item/NewsItem';
import {NewsItemType} from '../../services/store/newsList/types';
import {useDispatch, useSelector} from 'react-redux';
import newsListActions from '../../services/store/newsList/actions';
import {newsListSelector} from '../../services/store/newsList/selectors';
import Loading from '../../components/loading/Loading';

interface HomeScreenProps {
  navigation?: any;
}

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsListActions.load({page: 1}));
  }, [dispatch]);

  const newsList = useSelector(newsListSelector);

  const onNewsItemPress = (id: string): void => {
    navigation.navigate('NewsItem', {id});
  };

  const renderNewsItem = ({item}: {item: NewsItemType}): React.JSX.Element => {
    return (
      <NewsItem
        title={item.title}
        shortText={item.shortText}
        imageUrl={item.imageUrl}
        onPress={() => onNewsItemPress(item.id)}
      />
    );
  };

  return (
    <Loading isLoading={newsList.isLoading}>
      <FlatList
        testID="newsList"
        data={newsList.data.items}
        renderItem={renderNewsItem}
        initialNumToRender={10}
      />
    </Loading>
  );
};

export default HomeScreen;
