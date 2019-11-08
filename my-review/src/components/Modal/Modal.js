import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import './Modal.css';

class Modal extends Component {
    render() {
        ////cleaning up the address
        console.log('IS this the addresssssssss?', this.props.store.modal );
        let newAddress = '';
        if (this.props.store.modal.address) {
            let address = this.props.store.modal.address;

            newAddress = address.split(',');
            newAddress.pop();
            newAddress = newAddress.join(', ');
        }

        return (
            <div>
                <div className="modal">
                    <Button size="large"
                        color="secondary"
                        className="btn-exit-modal"
                        onClick={this.props.modalToggle}>Close</Button>

                    <div className="modal-content">
                        <h2>Review Info:</h2>
                        <h3 className="modal-title">Business Name: {this.props.store.modal.business_name}</h3>
                        <p>Address: {newAddress}</p>
                        <p>Review: {this.props.store.modal.review}</p>
                        <br />
                    </div>
                </div>

            </div>
                
        )
    }
}

export default connect(mapStoreToProps)(Modal);