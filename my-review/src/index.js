import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware } from 'redux';

import App from '../src/components/App/App';
import * as serviceWorker from './serviceWorker';



// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_REVIEWS', getReviews);
    yield takeEvery('ADD_REVIEW', postReview)
}

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
        
        console.log(response.data, 'this is the payload');
    }
    catch(err) {
        console.log('Error in POST', err);
    }
}   


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store reviews returned from the server
const review = (state = {}, action) => {
    switch (action.type) {
        case 'SET_REVIEW':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        review
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
