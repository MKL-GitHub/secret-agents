import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';

import styles from './AuthScreen.styles';
import {Button, EmailInput, PasswordInput} from '../../components/ui';
import {validateEmail} from '../../utils';
import {loadProfile} from '../../store/profile';
import {useAppDispatch} from '../../store';

const AuthScreen: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    const isEmailValid = validateEmail(email as string);
    const isPasswordValid = password !== '';

    setIsEmailValid(isEmailValid);
    setIsPasswordValid(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      // dispatch(profileActions.load({email, password}));
      dispatch(loadProfile({email, password}));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Авторизация</Text>
        <EmailInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          isValid={isEmailValid}
          setIsValid={setIsEmailValid}
        />
        <PasswordInput
          value={password}
          onChangeText={setPassword}
          placeholder="Пароль"
          isValid={isPasswordValid}
          setIsValid={setIsPasswordValid}
        />
        <Button text="Отправить" disabled={!isEmailValid || !isPasswordValid} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default AuthScreen;
