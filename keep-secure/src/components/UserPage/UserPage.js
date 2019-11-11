import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LogOutButton from '../LogOutButton/LogOutButton'
import {
    Box,
    Button,
    CssBaseline,
    Container,
    TextField,
    Typography,
    Grid
} from '@material-ui/core';
import './Userpage.css';

class UserPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_REVIEWS' });
      }
    state = {
        secretMessage: '',
    }
    

    sendSecret = (event) => {
        // event.preventDefault();
        const data = {
            secretMessage:this.state.secretMessage,
            user: this.props.store.user.id
        }
    
    this.props.dispatch({type: 'POST_SECRET', payload: data});
        
    this.setState({
        secretMessage: '',
      })
    }

    handleInputChange =  (event) => {
        this.setState({
        secretMessage: event.target.value,
        })
      }
    

    render() {
        const userName = this.props.store.user.username;
        const messageForDisplay = this.props.store.message;
        return (
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography
                            align='center'
                            variant='h3'
                            color='inherit'
                        >
                            Hello {userName}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography
                            variant='subtitle1'
                        >
                            <Box fontWeight="fontWeightBold">
                                Enter a New secret message:
                            </Box>
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label="Secret Message"
                            multiline
                            fullWidth
                            rows="4"
                            placeholder="Enter New Secret Message for Encryption"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInputChange}
                        />
                        <Button
                            color="primary"
                            type="submit"
                            variant="contained"
                            onClick={this.sendSecret}
                            fullWidth
                        >
                            Send Secret
                        </Button>

                    </Grid>
                    <br />
                    <Grid item sm={12} className='last-message'>
                        <Typography
                            variant='subtitle2'
                        >
                            <Box fontWeight="fontWeightBold">
                                Your Last Message:
                            </Box>
                        </Typography>
                        
                        {messageForDisplay}
                        
                    </Grid>
                    <Grid item xs={12}>
                        <LogOutButton />
                    </Grid>
                </Grid>

            </Container>
        )
    }
}

export default connect(mapStoreToProps)(UserPage);