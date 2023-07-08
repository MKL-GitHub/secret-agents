import {createAsyncThunk} from '@reduxjs/toolkit';

import {getNewsList} from '../../utils';
import {loadError, loadStart, loadSuccess} from './reducer';

const loadNewsList = createAsyncThunk('news-list/load', async (params, {dispatch, extra}) => {
  dispatch(loadStart);

  try {
    // @ts-ignore
    const res: any = await extra.api.get('/news', params);

    if (res.ok) {
      dispatch(
        loadSuccess({
          data: {
            items: getNewsList(res.data.news)
          }
        })
      );
    }
  } catch (error) {
    dispatch(loadError());
  }
});

export {loadNewsList};
