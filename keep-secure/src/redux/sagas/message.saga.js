import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET request for reviews, send payload to review reducer
// function* getReviews() {
//     try {
//         const response = yield axios.get('/api/review/map');
//         yield put ({type: 'SET_REVIEWS', payload:response.data});
//     }
//     catch(err) {
//         console.log('Error in GET', err);
//     }
// }   

//POST request to send message info from form to server to be encrypted
function* postSecretMessage(action) {
    try {
        console.log('action.payload message in the saga:', action.payload);
       yield axios.post('/api/secret', action.payload);  
    //    yield put({ type: 'GET_REVIEWS' });
    }
    catch(err) {
        console.log('Error in POST', err);
    }
}   

// Creates the messageSaga generator function, chooses what HTTP based on dispatch
function* messageSaga() {
    // yield takeLatest('GET_REVIEWS', getReviews);
    yield takeLatest('POST_SECRET', postSecretMessage)
}


export default messageSaga;