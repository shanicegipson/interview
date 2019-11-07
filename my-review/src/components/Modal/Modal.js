import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';

class Modal extends Component {
    render(){
        const review = this.props.store;
        console.log(review, 'why is the reducer empty?')

        return(
            <div>
                <div className="modal">
                    <Button size="large" 
                        className="btn-exit-modal" 
                        onClick={this.props.modalToggle}>Close</Button>

                    <div className="modal-content">
                    
                       
                    </div>
                </div>
            
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Modal);