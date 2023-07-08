import React, {FC, memo} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import styles from './Loading.styles';

export interface LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  testID?: string;
}

// @ts-ignore
const Loading: FC<LoadingProps> = ({isLoading, children, testID}) => {
  if (!isLoading) {
    return children;
  }

  return (
    <View testID={testID} style={styles.container}>
      <View style={styles.frame}>
        <ActivityIndicator size="large" />
        <Text style={styles.title}>Загрузка...</Text>
      </View>
    </View>
  );
};

export default memo(Loading);
