import AsyncStorage from '@react-native-async-storage/async-storage';

import {getAuthParams} from '../../utils';
import {AUTH_PARAMS} from '../../async-storage';

describe('getAuthParams', () => {
  it('должен вернуть null, если параметры небыли сохранены в AsyncStorage', async () => {
    const authParams = await getAuthParams();

    expect(authParams).toBeNull();
  });

  it('должен вернуть параметры авторизации из AsyncStorage', async () => {
    const params = {email: 'some@mail.ru', password: '1234'};

    await AsyncStorage.setItem(AUTH_PARAMS, JSON.stringify(params));
    const authParams = await getAuthParams();

    expect(authParams).toEqual(params);
  });
});
