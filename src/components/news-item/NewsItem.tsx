import React, {FC, memo} from 'react';
import {Text, Pressable} from 'react-native';

import styles from './NewsItem.styles';
import Image from '../ui/image/Image';

export interface NewsItemProps {
  title?: string;
  shortText?: string;
  imageUrl?: string;
  onPress?: () => void;
}

const NewsItem: FC<NewsItemProps> = ({title, shortText, imageUrl, onPress}) => {
  return (
    <Pressable testID="container" style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Image testID="image" url={imageUrl} containerStyle={styles.imageContainer} />
      <Text style={styles.shortText}>{shortText}</Text>
    </Pressable>
  );
};

export default memo(NewsItem);
