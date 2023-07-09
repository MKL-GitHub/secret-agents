import React, {FC, memo} from 'react';
import {Center, Column, Spinner, Text} from 'native-base';

import {FONT} from '@constants/theme';

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
    <Center testID={testID} flex="1">
      <Column space="5">
        <Text fontFamily={FONT.medium} fontSize={24}>
          Загрузка...
        </Text>
        <Spinner size="lg" />
      </Column>
    </Center>
  );
};

export default memo(Loading);
