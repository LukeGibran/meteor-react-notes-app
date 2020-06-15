import React, { useReducer } from 'react';
import UserContext from './userContext';
import userReducer from './userReducer';

import { SET_USER, REMOVE_USER } from '../types';

const UserState = (props) => {
  const initState = {
    id: '',
    name: '',
    username: '',
    email: '',
  };

  const [state, dispatch] = useReducer(userReducer, initState);

  // Set the user
  const setUser = (user) => {
    const { id, name, email, username } = user;
    dispatch({
      type: SET_USER,
      payload: { id, name, email, username },
    });
  };

  // Remove the user
  const removeUser = () => {
    dispatch({
      type: REMOVE_USER,
    });
  };

  return (
    <UserContext.Provider
      value={{
        setUser,
        removeUser,
        id: state.id,
        name: state.name,
        username: state.username,
        email: state.email,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
