import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';

import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

// Icon

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="54"
          height="54"
        >
          <path
            className="heroicon-ui"
            d="M7 5H5v14h14V5h-2v10a1 1 0 0 1-1.45.9L12 14.11l-3.55 1.77A1 1 0 0 1 7 15V5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm4 2v8.38l2.55-1.27a1 1 0 0 1 .9 0L15 13.38V5H9z"
          />
        </svg>

        <span className="font-semibold text-xl tracking-tight">Notes App</span>
      </div>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-red-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {!Meteor.userId() && (
            <Fragment>
              <NavLink
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white mr-4"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="block mt-4 lg:inline-block lg:mt-0 text-red-200 hover:text-white"
              >
                Register
              </NavLink>
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
