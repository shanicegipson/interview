import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Button from '@material-ui/core/Button';
import './Form.css';
// import Geolocation from '../Geocoder/Geocoder';


class Form extends Component {
    state = {
        businessName: '',
        review: '',
    };

    
    review = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_REVIEW',
            payload: {
                businessName: this.state.businessName,
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
                    className="buisnessName-input"
                />
                <br />
                <br />
                <textarea
                    type='text'
                    placeholder='Leave a review'
                    value={this.state.review}
                    onChange={this.handleInputChangeFor('review')}
                    className="buisnessName-input"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    next
                </Button>

            </form>
        )
    }
}

export default connect(mapStoreToProps)(Form);