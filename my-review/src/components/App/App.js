import React, { Component } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Container,
  Typography,
  Grid

} from '@material-ui/core';

import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import { grey } from '@material-ui/core/colors';
import Map from '../Map/Map';


//Material-ui styling
const styles = (theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      color: grey[400],
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      // backgroundColor: '#a4bd83'
    },
  });


class App extends Component {
  state = {
    name: '',
    businessName: '',
    address: '',
    review: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.name && this.state.businessName) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          name: this.state.name,
          businessName: this.state.businessName,
          address: this.state.address,
          review: this.state.review,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    })
  }

  render() {
    return (
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <div className={this.props.classes.paper}>
        <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography component="h1" variant="h5">
            Leave a Review
            </Typography>
          <form className={this.props.classes.form} onSubmit={this.login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={this.state.name}
              onChange={this.handleInputChangeFor('name')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="business name"
              label="Business name"
              type="business name"
              id="business name"
              autoComplete="business name"
              value={this.state.businessName}
              onChange={this.handleInputChangeFor('businessName')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="business address"
              label="Business Address"
              type="business address"
              id="business address"
              autoComplete="business address"
              value={this.state.address}
              onChange={this.handleInputChangeFor('address')}
            />
            <TextField
              id="outlined-dense-multiline"
              label="Please leave your review here"
              required
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rowsMax="10"
              value={this.state.review}
              onChange={this.handleInputChangeFor('review')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.classes.submit}
              onClick={() => { this.props.dispatch({ type: 'FETCH_USER' }) }}
            >
              Submit
          </Button>

          </form>
            </Grid>
            <Grid item xs={6}>
              <Map />
            </Grid>   
            </Grid>  
        </div>
        
      </Container>
      
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(App));
