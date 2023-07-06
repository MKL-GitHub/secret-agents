import AsyncStorage from '@react-native-async-storage/async-storage';
import { removeAuthParams } from '.';
import { AUTH_PARAMS } from '../../storageKeys';

describe('removeAuthParams function', () => {
  it('должен удалить параметры авторизации из AsyncStorage', async () => {
    await removeAuthParams();

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(AUTH_PARAMS);
  });
});
