import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import createSagaMidlleware from 'redux-saga';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger';

import rootReducer from './ducks'
import rootSagas from './sagas';

const sagaMiddleware = createSagaMidlleware();


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(logger, sagaMiddleware))
  sagaMiddleware.run(rootSagas)
  let persistor = persistStore(store)
  return { store, persistor }
}