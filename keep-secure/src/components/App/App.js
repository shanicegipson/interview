import React,  { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './App.css';

class App extends Component {
  render () {
    return (
      <h1>App Page</h1>
    )
  }
}

export default connect(mapStoreToProps)(App);
