import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';

import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'


class Map extends Component {

    state = {
        viewpoint: {
            width: 500,
            height: 500,
            latitude: 39.0997266,
            longitude: -94.5785667,
            zoom: 11
        },
        searchResultLayer: null
    };


    mapRef = React.createRef();
    geocoderContainerRef = React.createRef();

    componentDidMount() {
       
    }



    handleViewportChange = viewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
        //updates lat and long in state, as well as zoom
        console.log('viewport:', viewport);
    };

    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    handleGeocoderViewportChange = viewport => {
        const
            geocoderDefaultOverrides = { transitionDuration: 1000 };

        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };

    handleOnResult = event => {
        this.setState({
            searchResultLayer: new GeoJsonLayer({
                id: "search-result",
                data: event.result.geometry,
                getFillColor: [255, 0, 0, 128],
                getRadius: 1000,
                pointRadiusMinPixels: 5,
                pointRadiusMaxPixels: 10
            })
        });
        //this returns long and lat
        console.log('event.result.geometry: ', event.result.geometry, );
        this.props.dispatch({
            type: 'ADD_REVIEW',
            payload: {
                searchResultLayer: new
            }

        })
    };

    render() {
        const { viewport, searchResultLayer } = this.state;

        //Allows access to map token found in .env file
        const mapAccess = {
            mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN
        }

        const map = process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN


        return (
            <div>
                <div
                    ref={this.geocoderContainerRef}
                    style={{
                        width: 200,
                        padding: 15,
                        height: 50,
                        margin: 8,
                        fontsize: 15,
                        border: "blue",
                        borderRadius: 4,
                    }}
                />

                <MapGL
                    ref={this.mapRef}
                    {...mapAccess}{...this.state.viewpoint}
                    mapStyle={"mapbox://styles/sgipson/ck1vfd6gm2ccq1cpndnmgn37q"}
                    onViewportChange={(viewpoint) => this.setState({ viewpoint })}
                >
                    <Geocoder
                        mapRef={this.mapRef}
                        containerRef={this.geocoderContainerRef}
                        onResult={this.handleOnResult}
                        onViewportChange={this.handleGeocoderViewportChange}
                        mapboxApiAccessToken={map}
                    />
                    <DeckGL {...viewport} layers={[searchResultLayer]} />
                </MapGL>
            </div>



        );
    }
}
export default connect(mapStoreToProps)(Map);