import React, { Fragment, useContext } from 'react';
import { Meteor } from 'meteor/meteor';

import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

// Context
import UserContext from '../../context/user/userContext';

const Sidebar = (props) => {
  const userContext = useContext(UserContext);
  const { removeUser, email, name, username } = userContext;

  const logout = () => {
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      } else {
        removeUser();
        props.history.push('/login');
      }
    });
  };

  return (
    <Fragment>
      <div className="w-full flex justify-center ">
        <img
          src="user_circle.png"
          alt="user"
          className=""
          style={{ height: '130px', width: '130px', textAlign: 'center' }}
        />
      </div>

      <h1 className="text-bold text-xl my-2">{name} 👨</h1>
      <h3>{username} 💻</h3>
      <h3 className="mb-3">{email} 📧 </h3>
      <hr className="text-black-800" />

      <ul className="flex-col">
        <li className="mr-6 my-4">
          <NavLink
            className="text-red-500 hover:text-red-800 text-bold text-xl"
            to="/"
          >
            🏠 Home
          </NavLink>
        </li>

        <li className="mr-6 my-4">
          <NavLink
            className="text-red-500 hover:text-red-800 text-bold text-xl"
            to="/profile"
          >
            🔧 Profile
          </NavLink>
        </li>

        <li className="mr-6 my-4">
          <a
            className="text-red-500 hover:text-red-800 text-bold text-xl"
            href="#!"
            onClick={logout}
          >
            🚶Logout
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default withRouter(Sidebar);
