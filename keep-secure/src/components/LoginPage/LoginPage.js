import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class LoginPage extends Component {
    render () {
      return (
        <h1>LoginPage Page</h1>
      )
    }
  }
  
  export default connect(mapStoreToProps)(LoginPage);
  