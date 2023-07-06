import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthParams } from '../../types';
import { AUTH_PARAMS } from '../../storageKeys';
import { saveAuthParams } from '.';

describe('saveAuthParams function', () => {
  it('должен сохранить параметры авторизации в AsyncStorage', async () => {
    const params: AuthParams = {
      email: 'jonh.smith@gmail.com',
      password: '123456',
    };

    await saveAuthParams(params);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      AUTH_PARAMS,
      JSON.stringify(params)
    );

    expect(AsyncStorage.setItem).not.toHaveBeenCalledWith(
      AUTH_PARAMS,
      JSON.stringify({ email: 'mistake@gmail.com', password: 'mistake password' })
    );
  });
});