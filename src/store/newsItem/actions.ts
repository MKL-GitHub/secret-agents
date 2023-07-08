import {createAsyncThunk} from '@reduxjs/toolkit';

import {loadError, loadStart, loadSuccess} from './reducer';

const loadNewsItem = createAsyncThunk('news-item/load', async (id, {dispatch, extra}) => {
  dispatch(loadStart);

  try {
    // @ts-ignore
    const res: any = await extra.api.get('/news/' + id);

    if (res.ok) {
      const news: any = res.data.news;

      dispatch(
        loadSuccess({
          data: {
            title: news.title,
            imageUrl: news.image_url,
            imageAdditionalUrl: news.image_additional_url,
            body: news.body.replace(/<\/?p>/g, ''),
            shortText: news.short_text?.replace(/<\/?p>/g, '').trim(),
            createdAt: new Date(news.created_at)
          }
        })
      );
    }
  } catch (error) {
    dispatch(loadError());
  }
});

export {loadNewsItem};
