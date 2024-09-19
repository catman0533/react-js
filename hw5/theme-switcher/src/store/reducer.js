// src/store/reducer.js
import { TOGGLE_THEME } from './actionTypes';

const initialState = {
  theme: 'light' // начальное состояние, может быть "dark"
};

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

export default themeReducer;
