import React, {FC, memo, useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import styles from './PasswordInput.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export type InputType = 'text' | 'email';

export interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isValid?: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordInput: FC<PasswordInputProps> = ({
  value,
  onChangeText,
  placeholder,
  isValid,
  setIsValid,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);
  const [eyeId, setEyeId] = useState<any>(null);

  const onBlur = () => {
    setIsValid(value !== '');
    setIsFocused(false);
  };

  const onChange = (text: string): void => {
    setIsValid(true);
    onChangeText(text);
  };

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const toggleEye = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
    if (isSecureTextEntry) {
      const id = setTimeout(() => setIsSecureTextEntry(true), 4000);

      setEyeId((prev: any) => {
        clearTimeout(prev);
        return id;
      });
    }
  };

  return (
    <View
      style={[
        styles.container,
        !isValid && styles.error,
        isFocused && styles.isFocused,
      ]}>
      <View style={styles.icon}>
        <Icon name="lock" size={25} color="#666" />
      </View>

      <TextInput
        style={[styles.input]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        secureTextEntry={isSecureTextEntry}
        placeholderTextColor="#ccc"
        onBlur={onBlur}
        onFocus={onFocus}
      />

      {isFocused && (
        <TouchableOpacity style={styles.icon} onPress={toggleEye}>
          <Icon
            name={isSecureTextEntry ? 'eye' : 'eye-slash'}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(PasswordInput);
