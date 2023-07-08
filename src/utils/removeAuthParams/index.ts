import AsyncStorage from '@react-native-async-storage/async-storage';

import {AUTH_PARAMS} from '../../async-storage';

/**
 * Удаление параметров для авторизации из AsyncStorage
 */
export async function removeAuthParams(): Promise<void> {
  try {
    await AsyncStorage.removeItem(AUTH_PARAMS);
  } catch (error) {
    console.error(error);
  }
}
