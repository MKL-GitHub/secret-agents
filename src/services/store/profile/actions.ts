import { Dispatch } from "redux";
import { PROFILE_LOAD_ERROR, PROFILE_LOAD_START, PROFILE_LOAD_SUCCESS, PROFILE_LOGOUT } from "./types";
import Services from "../..";
import { AuthParams } from "../../../types";
import { saveAuthParams } from "../../../utils/saveAuthParams";
import { removeAuthParams } from "../../../utils/removeAuthParams";

export default {
  /**
   * Авторизация пользователя
   * @param {AuthParams} params Параметры с email и паролем
   * @returns 
   */
  load: (params: AuthParams): any => {
    return async (dispatch: Dispatch, getState: () => any, services: Services) => {
      // Сброс данных и установка признака ожидания загрузки
      dispatch({ type: PROFILE_LOAD_START });

      try {
        const res: any = await services.api.post('/auth/sign_in', params);

        if (res.ok) {
          const user: any = res.data.user;

          dispatch({
            type: PROFILE_LOAD_SUCCESS, payload: {
              data: {
                headers: {
                  'access-token': res.headers['access-token'],
                  client: res.headers.client,
                  uid: res.headers.uid,
                },
                user: {
                  avatarUrl: user['avatar_url'],
                  username: user.username,
                }
              }
            }
          });

          // Сохраняем параметры для авторизации в хранилище
          saveAuthParams(params)
        }

      } catch (e) {
        //Ошибка загрузки
        dispatch({ type: PROFILE_LOAD_ERROR });
      }
    }
  },

  /**
   * Выход пользователя из аккаунта
   * @returns {{ type: string }}
   */
  logout: (): { type: string } => {
    removeAuthParams();
    return { type: PROFILE_LOGOUT }
  },

}