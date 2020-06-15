import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ components: Component, ...rest }) => {
  const [authenticate, setAuthenticate] = useState({
    isAuthenticated: false,
  });
  useEffect(() => {
    if (Meteor.user()) {
      console.log(true);
      setAuthenticate({ isAuthenticated: true });
    } else {
      console.log(false);
      setAuthenticate({ isAuthenticated: false });
    }
  }, []);

  const { isAuthenticated } = authenticate;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === false ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
