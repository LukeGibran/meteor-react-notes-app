import React, { useState, useContext, useEffect } from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Meteor } from 'meteor/meteor';

// Context
import AlertContext from '../../context/alert/alertContext';

// Layouts
import Alert from '../layouts/Alert';

const Register = (props) => {
  useEffect(() => {
    if (Meteor.userId()) {
      console.log('loggedIn');
      props.history.push('/');
    }
  }, []);
  const alertContext = useContext(AlertContext);

  const { setAlert, show, color, message } = alertContext;

  const [user, setUser] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { username, fullname, email, password, confirm } = user;
  const onSubmit = async (e) => {
    e.preventDefault();

    /*try {
      const data = Meteor.call(
        'user.register',
        username,
        email,
        password,
        fullname
      );

      console.log(data);
    } catch (error) {
      console.log(error.reason);
	} */

    Accounts.createUser(
      { username, email, password, profile: { name: fullname } },
      (err) => {
        if (err) {
          setAlert('red', err.reason);
          console.log(err);
        } else {
          setUser({
            fullname: '',
            username: '',
            email: '',
            password: '',
            confirm: '',
          });
          props.history.push('/?ref=kjKjddfjf9acmP');
        }
      }
    );
  };
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Register with Notes App 📕
          </h1>

          <p className="leading-relaxed mt-4">
            Just enter your Fullname, Email and desired password ❤️
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Register 📝
          </h2>
          {show && <Alert color={color} message={message} />}
          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4"
            placeholder="Full Name"
            type="text"
            name="fullname"
            required
            onChange={onChange}
            value={fullname}
          />
          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4"
            placeholder="Username"
            type="text"
            name="username"
            required
            onChange={onChange}
            value={username}
          />
          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4"
            placeholder="Email"
            type="email"
            name="email"
            required
            onChange={onChange}
            value={email}
          />
          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4"
            placeholder="Password"
            type="password"
            name="password"
            required
            onChange={onChange}
            value={password}
          />
          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4"
            placeholder="Confirm Password"
            type="password"
            name="confirm"
            required
            onChange={onChange}
            value={confirm}
          />
          <button
            type="submit"
            className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            Register
          </button>
          <p className="text-xs text-gray-500 mt-3">All Right Reserved 🤟</p>
        </form>
      </div>
    </section>
  );
};

export default Register;
