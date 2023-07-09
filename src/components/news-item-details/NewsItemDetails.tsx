import React, {FC, memo} from 'react';
import {ScrollView} from 'react-native';
import {Link, Image, Text, VStack, View} from 'native-base';

import {LinkedTextType} from '@types';
import {FONT} from '@constants/theme';

interface NewsItemDetailProps {
  imageAdditionalUrl?: string;
  title?: string;
  imageUrl?: string;
  linkedText: LinkedTextType[];
  shortText?: string;
  createdAt?: string;
}

const NewsItemDetail: FC<NewsItemDetailProps> = (props) => {
  return (
    <ScrollView>
      <Image source={{uri: props.imageAdditionalUrl}} alt="" w="100%" h="100" />
      <VStack alignItems="center" space="6" p="5">
        <Text fontSize={24} fontFamily={FONT.medium} textAlign="center">
          {props.title}
        </Text>
        <Image source={{uri: props.imageUrl}} size={300} alt="" />

        <View w="full" flexDir="row" alignItems="flex-end">
          {props.linkedText.map((item: any, index: number) =>
            item.url ? (
              <Link
                key={index}
                href={item.url}
                _text={{
                  color: 'blue.400',
                  fontFamily: FONT.regular
                }}
                mt="2">
                {item.text ? item.text : 'ссылке'}
              </Link>
            ) : (
              <Text key={index} fontFamily={FONT.regular}>
                {item.text}
              </Text>
            )
          )}
        </View>

        <Text w="full" fontFamily={FONT.regular}>
          {props.shortText}
        </Text>

        {props.createdAt && (
          <Text w="full" fontFamily={FONT.regular}>
            <Text color="text.500">Дата создания: </Text>
            <Text>{props.createdAt}</Text>
          </Text>
        )}
      </VStack>
    </ScrollView>
  );
};

export default memo(NewsItemDetail);
