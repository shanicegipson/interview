import { all } from 'redux-saga/effects';
import reviewSaga from './review.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

export default function* rootSaga() {
    yield all([
      reviewSaga(),
  
    ]);
  }