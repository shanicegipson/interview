import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


//POST request to send business information to server
function* postBusiness(action) {
    try {
        const response = yield axios.post('/api/business/add', action.payload);
        console.log(action.payload, 'is this the business payload');
        console.log(response.data, 'is this the business data');
    }
    catch(err) {
        console.log('Error in POST', err);
    }
}   

// Creates the businessSaga generator function that will hear the dispatch and run postBusiness
function* businessSaga() {
    yield takeLatest('ADD_BUSINESS', postBusiness)
}


export default businessSaga;