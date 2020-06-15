import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initState = {
    show: false,
    color: '',
    message: '',
  };

  const [state, dispatch] = useReducer(alertReducer, initState);

  // Set alert
  const setAlert = (color, message) => {
    dispatch({
      type: SET_ALERT,
      payload: { color, message },
    });
  };

  // Remove Alert
  const removeAlert = () => {
    dispatch({
      type: REMOVE_ALERT,
    });
  };

  return (
    <AlertContext.Provider
      value={{
        setAlert,
        removeAlert,
        color: state.color,
        message: state.message,
        show: state.show,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
