import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET request for reviews using generator functions
function* getReviews() {
    try {
        const response = yield axios.get('/api/review/');
        
        yield put ({type: 'SET_REVIEW', payload:response.data});
    }
    catch(err) {
        console.log('Error in GET', err);
    }
}   

//POST request to send review from form to DB
function* postReview(action) {
    try {
        const response = yield axios.post('/api/review/add', action.payload);
        console.log(action.payload, 'this is the payload');
        console.log(response.data, 'this is the payload');
    }
    catch(err) {
        console.log('Error in POST', err);
    }
}   

// Create the reviewSaga generator function
function* reviewSaga() {
    yield takeLatest('GET_REVIEWS', getReviews);
    yield takeLatest('ADD_REVIEW', postReview)
}


export default reviewSaga;