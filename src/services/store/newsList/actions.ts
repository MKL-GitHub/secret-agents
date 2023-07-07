import {Dispatch} from 'redux';
import {
  NEWS_LIST_LOAD_ERROR,
  NEWS_LIST_LOAD_START,
  NEWS_LIST_LOAD_SUCCESS,
} from './types';
import Services from '../..';
import {getNewsList} from '../../../utils/getNewsList';

export default {
  /**
   * Получение списка новостей по переданным парметрам
   * @param {{page: number}} params Параметры для получения списка товаров
   * @returns
   */
  load: (params: {page: number}): any => {
    return async (
      dispatch: Dispatch,
      getState: () => any,
      services: Services,
    ) => {
      // Сброс данных и установка признака ожидания загрузки
      dispatch({type: NEWS_LIST_LOAD_START});

      try {
        services.api.setHeaders(getState().profile.data.headers);
        const res: any = await services.api.get('/news', params);

        if (res.ok) {
          dispatch({
            type: NEWS_LIST_LOAD_SUCCESS,
            payload: {
              data: {
                items: getNewsList(res.data.news),
              },
            },
          });
        }
      } catch (e) {
        //Ошибка загрузки
        dispatch({type: NEWS_LIST_LOAD_ERROR});
      }
    };
  },
};
