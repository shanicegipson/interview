import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import './Form.css';
// import Geolocation from '../Geocoder/Geocoder';


//Will take in the business name and review

class Form extends Component {
    state = {
        businessName: '',
        address: '',
        review: '',
    };

    
    review = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_REVIEW',
            payload: {
                businessName: this.state.businessName,
                address: this.state.address,
                review: this.state.review,
            },
        });
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
        console.log(event.target.value, 'captured value')
    }


    render() {
        return (
            <form onSubmit={this.review}>
                <input
                    type='text'
                    placeholder='Business Name'
                    value={this.state.businessName}
                    onChange={this.handleInputChangeFor('businessName')}
                    className="input"
                />
               
                <br />
                <input
                    type='text'
                    placeholder='Address'
                    value={this.state.address}
                    onChange={this.handleInputChangeFor('address')}
                    className="input"
                />
                <br />
                <textarea
                    type='text'
                    placeholder='Leave a review'
                    value={this.state.review}
                    onChange={this.handleInputChangeFor('review')}
                    className="input"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    submit
                </Button>

            </form>
        )
    }
}

export default connect(mapStoreToProps)(Form);