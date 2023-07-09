import React, {FC, memo} from 'react';
import {HStack, Text, Avatar, Button, Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {FONT} from '@constants/theme';

export interface HeaderProps {
  username?: string;
  avatarUrl?: string;
  onLogout?: () => void;
}

const Header: FC<HeaderProps> = ({username, avatarUrl, onLogout}) => {
  return (
    <HStack alignItems="center" space="4">
      <Text fontFamily={FONT.regular}>{username}</Text>
      <Avatar testID="avatar" bg="cyan.500" source={{uri: avatarUrl}} />
      <Button
        testID="logout"
        p="1"
        display="flex"
        flexDir="column"
        endIcon={<Icon as={<MaterialIcons name="logout" />} size={3} color="gray.50" />}
        onPress={onLogout}>
        <Text fontFamily={FONT.regular} color="gray.50" fontSize="12">
          ВЫЙТИ
        </Text>
      </Button>
    </HStack>
  );
};

export default memo(Header);
