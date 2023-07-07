import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_PARAMS} from '../../storageKeys';
import {AuthParams} from '../../types';

/**
 * Сохранение параметров для авторизации в AsyncStorage
 * @param params Параметры для авторизации
 */
export async function saveAuthParams(params: AuthParams): Promise<void> {
  try {
    await AsyncStorage.setItem(AUTH_PARAMS, JSON.stringify(params));
  } catch (error) {
    console.error(error);
  }
}
