import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET request for reviews using generator functions
function* getReviews() {
    try {
        console.log('this is a get');
        const response = yield axios.get('/api/review/map');
        console.log(response, 'this is the information from the GET dhahldfhdahkhdsahdskhdsfh');
        yield put ({type: 'SET_REVIEWS', payload:response.data});
    }
    catch(err) {
        console.log('Error in GET', err);
    }
}   

//POST request to send review from form to DB
function* postReview(action) {
    try {
       yield axios.post('/api/review/map', action.payload);  
    }
    catch(err) {
        console.log('Error in POST', err);
    }
}   

// Create the reviewSaga generator function
function* reviewSaga() {
    yield takeLatest('GET_REVIEWS', getReviews);
    yield takeLatest('POST_REVIEW', postReview)
}


export default reviewSaga;