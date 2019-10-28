import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


//POST request to send business info from form to DB
function* postBusiness(action) {
    try {
        const response = yield axios.post('/api/business/add', action.payload);
        console.log(action.payload, 'this is the business payload');
        console.log(response.data, 'this is the business data');
    }
    catch(err) {
        console.log('Error in POST', err);
    }
}   

// Create the reviewSaga generator function
function* businessSaga() {
    yield takeLatest('ADD_BUSINESS', postBusiness)
}


export default businessSaga;