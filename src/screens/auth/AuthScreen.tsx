import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './AuthScreen.styles';
import Button from '../../components/ui/button/Button';
import EmailInput from '../../components/ui/email-input/EmailInput';
import PasswordInput from '../../components/ui/password-input/PasswordInput';
import validateEmail from '../../utils/validateEmail';
import {useDispatch} from 'react-redux';
import profileActions from '../../services/store/profile/actions';

const AuthScreen: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const dispatch = useDispatch();

  const onSubmit = async () => {
    const isEmailValid = validateEmail(email as string);
    const isPasswordValid = password !== '';

    setIsEmailValid(isEmailValid);
    setIsPasswordValid(isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      dispatch(profileActions.load({email, password}));
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
        <Button
          text="Отправить"
          disabled={!isEmailValid || !isPasswordValid}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default AuthScreen;
