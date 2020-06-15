import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Layouts
import Navbar from './components/layouts/Navbar';

// Context
import AlertState from './context/alert/AlertState';
import UserState from './context/user/UserState';

// Pages
import Home from '../ui/components/pages/Home';
import NotFound from '../ui/components/pages/404';

// Routing
//import PrivateRoute from '../ui/components/routing/PrivateRoute';

export const App = () => (
  <UserState>
    <AlertState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact pathc="*" component={NotFound} />
        </Switch>
      </Router>
    </AlertState>
  </UserState>
);
