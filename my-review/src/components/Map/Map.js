import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Marker from './Marker';
import Modal from '../Modal/Modal';
import Popover from '@material-ui/core/Popover';

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
  handleModal = (event, data) => {
    ////if modal is closed, open it, and vice versa
    this.setState(prevState => ({
      modalIsShowing: !prevState.modalIsShowing,
    }), () => {
      ////if modal is open, get listing data from reducer
      if (this.state.modalIsShowing == true) {
        console.log(data, 'what is this info for the modal');
        this.props.dispatch({ type: 'DISPLAY_REVIEW', payload: data })
      }
    }
    );
  }

  render() {
    let reviewArray = this.props.store.review
    console.log(reviewArray, 'array of reviews?');

    //Maps through array to get info for each review

    const markerForReview = reviewArray.map((review, index) => {
      return (
        <Marker key={index}
          lat={review.latitude}
          lng={review.longitude}
          modalToggle={this.handleModal}
          item={review}
        />
      )
    });

    let detailsPane = <div></div>
    if (this.state.modalIsShowing) {
      detailsPane = <Modal id="modal" modalToggle={this.handleModal}></Modal>
    }

    return (

      <div style={{ height: '50vh', width: '100%' }}>

        {detailsPane}

        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {markerForReview}

        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Map);