import React, { useEffect, useContext } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

// Context
import AlertContext from '../../context/alert/alertContext';
import UserContext from '../../context/user/userContext';

// Layouts
import Sidebar from '../layouts/Sidebar';
import Alert from '../layouts/Alert';

// Notes
import NotesIndex from '../Notes/NotesIndex';

const Home = (props) => {
  const alertContext = useContext(AlertContext);
  const userContext = useContext(UserContext);

  const { setAlert, removeAlert, color, message, show } = alertContext;
  const { setUser, name } = userContext;

  const { userId, user } = useTracker(() => {
    const user = Meteor.user();
    const userId = Meteor.userId();

    return {
      user,
      userId,
    };
  }, []);

  // Check if user has logged in

  useEffect(() => {
    if (!Meteor.userId()) {
      props.history.push('/login');
    }
  }, []);

  // Display welcome message
  useEffect(() => {
    if (props.location.search) {
      setAlert('green', `Welcome! ${name} 👋`);
    }

    removeAlert();
  }, []);

  // Set the user
  useEffect(() => {
    if (user) {
      setUser({
        id: userId,
        name: user.profile.name,
        email: user.emails[0].address,
        username: user.username,
      });
    }
  }, [user]);

  return (
    <div
      className="flex flex-wrap justify-center"
      style={{ height: 'calc(100vh - 80px)' }}
    >
      {/* Sidebar */}
      <div className="w-full h-full md:w-1/6 bg-gray-200 p-4 text-center ">
        <Sidebar />
      </div>

      <div className="w-full md:w-5/6  p-4 text-center text-gray-700">
        {show && <Alert color={color} message={message} />}
        <NotesIndex />
      </div>
    </div>
  );
};

export default Home;
