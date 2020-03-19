import createSagaMidlleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducers from './ducks';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMidlleware();

const store = createStore(rootReducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSagas)

export default store;
