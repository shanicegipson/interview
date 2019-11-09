import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
    render(){
        return(
            <div>
                <p>User Page</p>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(UserPage);