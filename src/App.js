import React from "react";
import Routes from './routes';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

import Loading from './components/loading'

import configureStore from './store/configureStore'
const { persistor, store } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

App.propTypes = {};

export default App;
