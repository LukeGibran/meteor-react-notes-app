import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        show: true,
        color: action.payload.color,
        message: action.payload.message,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        show: false,
        color: '',
        message: '',
      };
    default:
      return state;
  }
};
