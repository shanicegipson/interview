import React,  { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import UserPage from '../UserPage/UserPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterPage from '../RegisterPage/RegisterPage';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }
  render () {
    return (
      <Router>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
{/*             
            <Route
              exact
              path="/home"
              component={LoginPage}
            />
            <Route
              exact
              path="/login"
              component={UserPage}
            /> */}

          
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the share page instead. */}
           <ProtectedRoute
              exact
              path="/login"
              authRedirect="/admin"
              component={LoginPage}
            />
           <ProtectedRoute
              exact
              path="/registration"
              authRedirect="/admin"
              component={RegisterPage}
            />
            

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(mapStoreToProps)(App);
