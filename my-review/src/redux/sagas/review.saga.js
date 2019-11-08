import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET request for reviews, send payload to review reducer
function* getReviews() {
    try {
        const response = yield axios.get('/api/review/map');
        yield put ({type: 'SET_REVIEWS', payload:response.data});
    }
    catch(err) {
        console.log('Error in GET', err);
    }
}   

//POST request to send review info from form to server
function* postReview(action) {
    try {
       yield axios.post('/api/review/map', action.payload);  
       yield put({ type: 'GET_REVIEWS' });
    }
    catch(err) {
        console.log('Error in POST', err);
    }
}   

// Creates the reviewSaga generator function, chooses what HTTP based on dispatch
function* reviewSaga() {
    yield takeLatest('GET_REVIEWS', getReviews);
    yield takeLatest('POST_REVIEW', postReview)
}


export default reviewSaga;