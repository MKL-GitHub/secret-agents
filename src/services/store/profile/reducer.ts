import { PROFILE_LOAD_ERROR, PROFILE_LOAD_START, PROFILE_LOAD_SUCCESS, PROFILE_LOGOUT, ProfileState } from "./types";

// Начальное состояние
const initialState: ProfileState = {
  data: {},
  isLoading: false, // признак ожидания загрузки
  isAuth: false,
}

// Обработчик действий
function reducer(state = initialState, action: any): ProfileState {
  switch (action.type) {
    case PROFILE_LOAD_START:
      return { ...state, data: {}, isLoading: true };

    case PROFILE_LOAD_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false, isAuth: true };

    case PROFILE_LOAD_ERROR:
      return { ...state, data: {}, isLoading: false }; //@todo текст ошибки сохранить?

    case PROFILE_LOGOUT:
      return initialState;

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
