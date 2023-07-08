import React, {FC, memo} from 'react';
import {View, ScrollView, Text, Linking} from 'react-native';

import styles from './NewsItemDetails.styles';
import Image from '../ui/image/Image';
import {LinkedTextType} from '../../types';

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
      <Image url={props.imageAdditionalUrl} containerStyle={styles.imageContainer} />
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Image url={props.imageUrl} containerStyle={styles.imageContainer} />

        <Text style={styles.body}>
          {props.linkedText.map((item: any, index: number) =>
            item.url ? (
              <Text key={index} style={styles.bodyLink} onPress={() => Linking.openURL(item.url)}>
                {item.text ? item.text : 'ссылке'}
              </Text>
            ) : (
              <Text key={index}>{item.text}</Text>
            )
          )}
        </Text>

        <Text style={styles.shortText}>{props.shortText}</Text>

        {props.createdAt && (
          <Text style={styles.createdAt}>
            <Text>Дата создания: </Text>
            <Text style={styles.createdAtValue}>{props.createdAt}</Text>
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default memo(NewsItemDetail);
