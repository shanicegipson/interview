import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Marker from './Marker';
import Modal from '../Modal/Modal';

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
    let reviewArray = this.props.store.review
    console.log(reviewArray, 'array of reviews?');

//Maps through array to get info for each review

    // const markerForReview = reviewArray.map((review, index) => {
    //   return (
    //     <Marker key={index} 
    //       lat={review.latitude}
    //       lng={item.longitude}
    //       item={item}
    //     />
    //   )
    // });

    return (
  
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* {markerForReview} */}

        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Map);