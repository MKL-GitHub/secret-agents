import React, {FC, memo} from 'react';
import {View, TextInput} from 'react-native';
import styles from './EmailInput.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import validateEmail from '../../../utils/validateEmail';

export type InputType = 'text' | 'email';

export interface EmailInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isValid?: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailInput: FC<EmailInputProps> = ({
  value,
  onChangeText,
  placeholder,
  isValid,
  setIsValid,
}) => {
  const onBlur = () => {
    setIsValid(validateEmail(value as string));
  };

  const onChange = (text: string): void => {
    setIsValid(true);
    onChangeText(text);
  };

  return (
    <View style={[styles.container, !isValid && styles.error]}>
      <View style={styles.icon}>
        <Icon name="envelope" size={25} color="#666" />
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        onBlur={onBlur}
      />
    </View>
  );
};

export default memo(EmailInput);
