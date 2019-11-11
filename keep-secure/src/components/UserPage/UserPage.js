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
    state = {
        secretMessage: '',
    }

    sendSecret = (event) => {
        event.preventDefault();
        console.log('This is the updated State From form:', this.state.secretMessage);

        const testData = 'sending this a test!!!!!';
    
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
        const testData = `this is some test text to see what the last message would like. I wonder
            if I got rid of that div. I think I need to put it back because it will look right to
            me. I am getting tired imma head to bed after this. "At vero eos et accusamus et iusto 
            odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum 
            fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum 
            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
            facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem 
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
            repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente 
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus 
            asperiores repellat."`
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
                        {/* <TextField
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
                        /> */}
                        {testData}
                        {/* <div className='display-area'>

                        </div> */}
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