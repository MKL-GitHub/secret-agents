import React, {FC, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {NewsItem, Loading} from '@components';
import {useAppDispatch} from '@store';
import {getNewsList, loadNewsList} from '@store/newsList';

interface HomeScreenProps {
  navigation?: any;
}

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(loadNewsList({page: 1}));
  }, [dispatch]);

  const newsList = useSelector(getNewsList);

  const onNewsItemPress = (id: string): void => {
    navigation.navigate('NewsItem', {id});
  };

  const renderNewsItem = ({item}: {item: any}): React.JSX.Element => {
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
      <FlatList testID="newsList" data={newsList.data.items} renderItem={renderNewsItem} initialNumToRender={10} />
    </Loading>
  );
};

export default HomeScreen;
