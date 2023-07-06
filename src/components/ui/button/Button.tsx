import React, {FC, memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

export interface ButtonProps {
  text?: string;
  onPress?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
