import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


//POST request to send review from form to DB
function* postCoordinates(action) {
    try {
        const response = yield axios.post('/api/coordinates/add', action.payload);
        console.log(action.payload, 'this is the payload');
        console.log(response.data, 'this is the data');
    }
    catch(err) {
        console.log('Error in POST', err);
    }
}   

// Create the mapSaga generator functions
function* mapSaga() {
    yield takeLatest('ADD_COORDINATES', postCoordinates)
}


export default mapSaga;