import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

import './Map.css';


class Map extends Component {
    state = {
        viewpoint: {
            width: 500,
            height: 500,
            latitude: 39.0997266,
            longitude: -94.5785667,
            zoom: 11
        }
    };

    // metropolitanArea = {
    //     viewpoint: {
    //         width: 500,
    //         height: 500,
    //         latitude: 39.0997266,
    //         longitude: -94.5785667,
    //         zoom: 11
    //     }
    // }

    render() {
        //Allows access to map token found in .env file
        const mapAccess = {
            mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN
        }


        return (
            <div>

                <ReactMapGL
                    {...mapAccess}{...this.state.viewpoint}
                    mapStyle={"mapbox://styles/sgipson/ck1vfd6gm2ccq1cpndnmgn37q"}

                    onViewportChange={(viewpoint) => this.setState({ viewpoint })}
                />
            </div>

        );
    }
}
export default Map;