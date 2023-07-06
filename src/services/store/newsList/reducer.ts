import { NEWS_LIST_LOAD_ERROR, NEWS_LIST_LOAD_START, NEWS_LIST_LOAD_SUCCESS, NewsListState } from "./types";

// Начальное состояние
const initialState: NewsListState = {
  data: {},
  isLoading: false, // признак ожидания загрузки
}

// Обработчик действий
function reducer(state = initialState, action: any): NewsListState {
  switch (action.type) {
    case NEWS_LIST_LOAD_START:
      return { ...state, data: {}, isLoading: true };

    case NEWS_LIST_LOAD_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false };

    case NEWS_LIST_LOAD_ERROR:
      return { ...state, data: {}, isLoading: false }; //@todo текст ошибки сохранить?

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
