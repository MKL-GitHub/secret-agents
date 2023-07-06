import React, {FC, memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Header.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface HeaderProps {
  username?: string;
  avatarUrl?: string;
  onLogout?: () => void;
}

const Header: FC<HeaderProps> = ({username, avatarUrl, onLogout}) => {
  return (
    <View style={styles.container}>
      <Text testID="username" style={styles.name}>
        {username}
      </Text>
      <Image testID="avatar" source={{uri: avatarUrl}} style={styles.avatar} />
      <TouchableOpacity
        testID="logout"
        style={styles.logout}
        onPress={onLogout}>
        <Text style={styles.logoutText}>ВЫЙТИ</Text>
        <Icon style={styles.logoutIcon} name="sign-out" size={15} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);
