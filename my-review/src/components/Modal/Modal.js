import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert2';

class Modal extends Component {
    render(){
        const clickedReview = this.props.store.clickedReview
        console.log(clickedReview, 'info for clicked review');
        return(
            <div>
                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Modal);