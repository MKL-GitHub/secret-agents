import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthParams} from '../../types';
import {AUTH_PARAMS} from '../../async-storage';

/**
 * Сохранение параметров для авторизации в AsyncStorage
 * @param {AuthParams} params Параметры для авторизации
 */
export async function saveAuthParams(params: AuthParams): Promise<void> {
  try {
    await AsyncStorage.setItem(AUTH_PARAMS, JSON.stringify(params));
  } catch (error) {
    console.error(error);
  }
}
