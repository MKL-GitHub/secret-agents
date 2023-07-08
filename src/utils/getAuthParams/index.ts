import AsyncStorage from '@react-native-async-storage/async-storage';

import {AUTH_PARAMS} from '../../async-storage';
import {AuthParams} from '../../types';

/**
 * Получение параметров для авторизации из AsyncStorage
 * @returns {Promise<AuthParams | null>} Параметры для авторизации
 */
export async function getAuthParams(): Promise<AuthParams | null> {
  try {
    const params = await AsyncStorage.getItem(AUTH_PARAMS);
    if (!params) {
      return null;
    }
    return JSON.parse(params);
  } catch (error) {
    console.error(error);
    return null;
  }
}
