import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LogOutButton from '../LogOutButton/LogOutButton'
import {
    Button,
    CssBaseline,
    Container,
    TextField,
    Typography,
    Grid
} from '@material-ui/core';
import './Userpage.css';

class UserPage extends Component {
    state = {
        secretMessage: ''
    }

    sendSecret = (event) => {
        event.preventDefault();
        console.log('This is the updated State From form:', this.state.secretMessage);
    
    this.props.dispatch({type: 'POST_SECRET', payload: this.state.secretMessage});
        
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
                            Enter a New secret message:
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
                            value={this.state.secretMessage}
                            onChange={this.handleInputChange}
                        />
                        <Button
                            color="primary"
                            size="medium"
                            type="submit"
                            variant="contained"
                            onClick={this.sendSecret}
                        >
                            Send Secret
                        </Button>

                    </Grid>
                    <Grid item sm={12} className='last-message'>
                        <Typography
                            variant='subtitle2'
                        >
                            Your Last Message:
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label="Secret Message"
                            multiline
                            fullWidth
                            rows="4"
                            defaultValue="This will be the last message that was sent by user or empty for a 
                                new user. I am trying to see what it may look like if a lot of text is in this
                                field. I will work on capturing the text from the field above next! "
                            margin="normal"
                            variant="outlined"
                        />
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