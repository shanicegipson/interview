import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Marker from './Marker';
import Modal from '../Modal/Modal';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  state = {
    modalIsShowing: false,
  }
  static defaultProps = {
    center: {
      lat: 39.099724,
      lng: -94.578331
    },
    zoom: 12
  };


  render() {
    console.log(this.props.store.review, 'This is the review reducer');

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Map);