import React, { Component } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';

class GeocoderInput extends Component {
    state = {
        viewpoint: {
            width: 500,
            height: 500,
            latitude: 39.0997266,
            longitude: -94.5785667,
            zoom: 11
        }
    };

    onSelected = (viewport, item) => {
        this.setState({ viewport });
        console.log('Selected: ', item)
    }


    render() {
        //Allows access to map token found in .env file
        const mapAccess = {
            mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN
        }

        const queryParams = {
            country: 'us'
        }

        return (
            <div>
                <Geocoder
                    {...mapAccess} onSelected={this.onSelected} viewport={this.state.viewport} hideOnSelect={true}
                    // localGeocoder={this.metropolitanArea}
                    queryParams={queryParams}
                />
            </div>

        );
    }
}
export default GeocoderInput;