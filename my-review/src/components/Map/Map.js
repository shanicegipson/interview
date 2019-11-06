import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import mapStoreToProps from '../../modules/mapStoreToProps';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
          lat: 39.099724,
          lng: -94.578331
        },
        zoom: 11
      };
    render(){
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={39.099724}
                  lng={-94.578331}
                  text="Hey Girl"
                />
              </GoogleMapReact>
            </div>
          );
    }
}

export default connect(mapStoreToProps) (Map);