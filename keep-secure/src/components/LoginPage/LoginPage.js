import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Container,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import './LoginPage.css';


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
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      color: grey[400],
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#33c9dc'
    },
  });


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
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
        {/* <div>
            {this.props.store.errors.loginMessage && (
             <h2
                className="alert"
                role="alert"
              >
                {this.props.store.errors.loginMessage}
            </h2>
            )}
          </div> */}

        <div className={this.props.classes.paper}>
          <Avatar className={this.props.classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
            </Typography>
          <form className={this.props.classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Username"
              label="Username"
              name="Username"
              autoComplete="Username"
              autoFocus
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.classes.submit}
              onClick={this.login}
            >
              Sign In
          </Button>

          </form>
        </div>
        {/*This button takes the user to the registration  page */}
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          >
            Register
          </button>
        </center>
      </Container>
    )
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LoginPage));
