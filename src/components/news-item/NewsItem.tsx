import React, {FC, memo} from 'react';
import {VStack, Image, Text, Pressable} from 'native-base';

import {FONT} from '@constants/theme';

export interface NewsItemProps {
  title?: string;
  shortText?: string;
  imageUrl?: string;
  onPress?: () => void;
}

const NewsItem: FC<NewsItemProps> = ({title, shortText, imageUrl, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      testID="container"
      rounded="8"
      borderColor="coolGray.300"
      shadow="5"
      bg="coolGray.100"
      p="5"
      mx="5"
      my="2">
      <VStack space="5" alignItems="center">
        <Text fontSize="24" fontFamily={FONT.regular}>
          {title}
        </Text>
        <Image testID="image" source={{uri: imageUrl}} size="300" alt="Картинка" />
        <Text w="100%" fontSize="16" fontFamily={FONT.regular}>
          {shortText}
        </Text>
      </VStack>
    </Pressable>
  );
};

export default memo(NewsItem);
