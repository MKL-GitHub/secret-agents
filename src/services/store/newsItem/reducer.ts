import { NEWS_ITEM_LOAD_ERROR, NEWS_ITEM_LOAD_START, NEWS_ITEM_LOAD_SUCCESS, NewsItemState } from "./types";

// Начальное состояние
const initialState: NewsItemState = {
  data: {},
  isLoading: false, // признак ожидания загрузки
}

// Обработчик действий
function reducer(state = initialState, action: any): NewsItemState {
  switch (action.type) {
    case NEWS_ITEM_LOAD_START:
      return { ...state, data: {}, isLoading: true };

    case NEWS_ITEM_LOAD_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false };

    case NEWS_ITEM_LOAD_ERROR:
      return { ...state, data: {}, isLoading: false }; //@todo текст ошибки сохранить?

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
