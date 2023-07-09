import {createAsyncThunk} from '@reduxjs/toolkit';

import {saveAuthParams} from '@utils';
import {loadStart, loadSuccess, loadError, User} from '@store/profile';

const loadProfile: any = createAsyncThunk('profile/load', async (params, {dispatch, extra}) => {
  dispatch(loadStart);

  try {
    // @ts-ignore
    const res = await extra.api.post('/auth/sign_in', params);

    if (res.ok) {
      const headers: any = {
        'access-token': res.headers['access-token'],
        client: res.headers.client,
        uid: res.headers.uid
      };
      const user: User = {
        avatarUrl: res.data.user.avatar_url,
        username: res.data.user.username
      };

      // @ts-ignore
      // Устанавливаем заголовки для api
      extra.api.setHeaders(headers);

      dispatch(
        loadSuccess({
          data: {headers, user}
        })
      );

      // @ts-ignore
      // Сохраняем параметры авторизации в AsyncStorage
      saveAuthParams(params);
    }
  } catch (error) {
    dispatch(loadError());
  }
});

export {loadProfile};
