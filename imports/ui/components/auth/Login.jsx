import React, { Fragment, useContext, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
//import { useTracker } from 'meteor/react-meteor-data';

// Context
import AlertContext from '../../context/alert/alertContext';

// Layout
import Alert from '../layouts/Alert';

const Login = (props) => {
  useEffect(() => {
    if (props.location.search) {
      setAlert('blue', 'You can now login!');

      setTimeout(() => {
        removeAlert();
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (Meteor.userId()) {
      props.history.push('/');
    }
  }, []);

  const alertContext = useContext(AlertContext);
  const { setAlert, removeAlert, show, message, color } = alertContext;

  const formSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const pw = e.target[1].value;

    Meteor.loginWithPassword(email, pw, (err) => {
      if (err) {
        setAlert('red', err.reason);
        setTimeout(() => {
          removeAlert();
        }, 3000);
      } else {
        props.history.push('/?ref=dsalkjfAsdaf3ojl');
      }
    });
  };

  return (
    <Fragment>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Login and take note of it! 📝
            </h1>

            <p className="leading-relaxed mt-4">
              Login to your account and let the ideas flow like a river! 🌊
            </p>
          </div>

          <form
            className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            onSubmit={formSubmit}
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Login 🚀
            </h2>

            {show && <Alert color={color} message={message} />}
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="text"
              name="email"
              required
            />

            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="password"
              type="password"
              name="password"
              required
            />

            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Login
            </button>

            <p className="text-xs text-gray-500 mt-3">All Right Reserved 🤟</p>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
