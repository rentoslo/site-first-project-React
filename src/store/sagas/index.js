import { all } from 'redux-saga/effects';

import watcherUser from './user'

function* rootSagas() {
  yield all([
    watcherUser(),
  ])
}

export default rootSagas;