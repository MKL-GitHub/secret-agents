import validator from 'validator';
import React, {FC, useState} from 'react';
import {Input, Button, Text, Stack, Box, Icon, FormControl} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

import {FONT} from '@constants/theme';
import {loadProfile} from '@store/profile';
import {useAppDispatch} from '@store';

const AuthScreen: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);
  const [eyeId, setEyeId] = useState<any>(null);

  const dispatch = useAppDispatch();

  const onBlurEmail = () => {
    setIsEmailInvalid(!validator.isEmail(email));
  };

  const onBlurPassword = () => {
    setIsPasswordInvalid(password === '');
  };

  const onChangeEmail = (text: string) => {
    setIsEmailInvalid(false);
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setIsPasswordInvalid(false);
    setPassword(text);
  };

  const onEyePress = () => {
    clearTimeout(eyeId);
    setIsSecureTextEntry((prev) => !prev);
    setEyeId(setTimeout(() => setIsSecureTextEntry(true), 4000));
  };

  const onSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const isEmailInvalid = !validator.isEmail(email);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const isPasswordInvalid = password === '';

    setIsEmailInvalid(isEmailInvalid);
    setIsPasswordInvalid(isPasswordInvalid);

    if (!isEmailInvalid && !isPasswordInvalid) {
      dispatch(loadProfile({email, password}));
    }
  };

  return (
    <Box justifyContent="center" p="10%" flex={1}>
      <Text fontFamily={FONT.medium} fontSize="32" pb="10" textAlign="center">
        Авторизация
      </Text>

      <Stack space={5} alignContent={'center'} w="100%" alignItems="center">
        <FormControl isInvalid={isEmailInvalid}>
          <Input
            type="text"
            fontFamily={FONT.regular}
            leftElement={<Icon as={<MaterialIcons name="email" />} ml={2} size={5} color="muted.400" />}
            placeholder="Email"
            value={email}
            onChangeText={onChangeEmail}
            onBlur={onBlurEmail}
          />
        </FormControl>
        <FormControl isInvalid={isPasswordInvalid}>
          <Input
            type="password"
            fontFamily={FONT.regular}
            leftElement={<Icon as={<MaterialIcons name={'lock'} />} ml={2} size={5} color="muted.400" />}
            placeholder="Пароль"
            InputRightElement={
              <TouchableOpacity onPress={onEyePress}>
                <Icon
                  as={<MaterialIcons name={isSecureTextEntry ? 'visibility' : 'visibility-off'} />}
                  size={5}
                  mr="3"
                  color="muted.400"
                />
              </TouchableOpacity>
            }
            value={password}
            onChangeText={onChangePassword}
            onBlur={onBlurPassword}
            secureTextEntry={isSecureTextEntry}
          />
        </FormControl>

        <Button w="100%" onPress={onSubmit}>
          <Text color="white" fontFamily={FONT.regular}>
            Отправить
          </Text>
        </Button>
      </Stack>
    </Box>
  );
};

export default AuthScreen;
