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
import './App.css';

class App extends Component {
  //will keep user logged in
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

          
            {/*If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.*/}
          
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
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
