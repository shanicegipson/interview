import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import './Map.css';

class Map extends Component {
    state = {
        viewpoint:{
            width: 500,
            height: 500,
            latitude: 39.0997266,
            longitude: -94.5785667,
            zoom:8
        }
    };
    
    render(){
        
        return(
            <ReactMapGL
                {...this.state.viewpoint}
                mapboxApiAccessToken={process.env.mapboxgl_accessToken}
                onViewportChange={(viewpoint) => this.setState({viewpoint})}
            />
        );
    }
}
export default Map;