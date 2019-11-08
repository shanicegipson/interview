import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';

class Marker extends Component {
    

    render() {
        console.log(this.props.store.review, 'please');
        return (
            <div className="map-marker">
                
                <RoomRoundedIcon 
                    fontSize="large" 
                    onClick={(event) => this.props.modalToggle(event, this.props.item)}
                    id="pin" 
                />
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Marker);