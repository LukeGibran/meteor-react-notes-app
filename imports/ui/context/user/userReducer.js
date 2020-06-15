import { SET_USER, REMOVE_USER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
      };
    case REMOVE_USER:
      return {
        ...state,
        id: '',
        name: '',
        username: '',
        email: '',
      };

    default:
      return state;
  }
};
