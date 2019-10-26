import React, { Component } from 'react';
import {
  CssBaseline,
  Container,
  Typography,
  Grid
} from '@material-ui/core';

import { connect } from 'react-redux';
import mapStoreToProps from '../../modules/mapStoreToProps';
import Map from '../Map/Map';
import Form from '../Form/Form';


class App extends Component {


  render() {

    return (

      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography align='center' variant='h1'>My Review</Typography>
            <br />
            <Typography align='center' variant='subtitle1'>Please add the Business name and
              review then the click next button! Next, to see your review appear on the map simply 
              search the address and click on the correct address. </Typography>
          </Grid>
          <br />
          <Grid item xs={6}>
            <Typography component="h3" align='center' variant="h5" >
              Leave Review
            </Typography>
            <Form />
          </Grid>
          <Grid item xs={6}>
            <Map />
          </Grid>
        </Grid>
      </Container>

    );
  }
}

export default connect(mapStoreToProps)(App);
