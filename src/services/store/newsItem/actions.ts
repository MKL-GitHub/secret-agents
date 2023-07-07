import {Dispatch} from 'redux';
import Services from '../..';
import {
  NEWS_ITEM_LOAD_ERROR,
  NEWS_ITEM_LOAD_SUCCESS,
  NEWS_ITEM_LOAD_START,
} from './types';

export default {
  /**
   * Получение новости по идентификатору
   * @param {string} id Идентификатор новости
   * @returns
   */
  load: (id: string): any => {
    return async (
      dispatch: Dispatch,
      getState: () => any,
      services: Services,
    ) => {
      // Сброс данных и установка признака ожидания загрузки
      dispatch({type: NEWS_ITEM_LOAD_START});

      try {
        services.api.setHeaders(getState().profile.data.headers);
        const res: any = await services.api.get('/news/' + id);

        if (res.ok) {
          const news: any = res.data.news;

          dispatch({
            type: NEWS_ITEM_LOAD_SUCCESS,
            payload: {
              data: {
                title: news.title,
                imageUrl: news.image_url,
                imageAdditionalUrl: news.image_additional_url,
                body: news.body.replace(/<\/?p>/g, ''),
                shortText: news.short_text?.replace(/<\/?p>/g, '').trim(),
                createdAt: new Date(news.created_at),
              },
            },
          });
        }
      } catch (e) {
        //Ошибка загрузки
        dispatch({type: NEWS_ITEM_LOAD_ERROR});
      }
    };
  },
};
