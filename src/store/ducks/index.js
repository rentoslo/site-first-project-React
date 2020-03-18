import { combineReducers } from 'redux'

import { reducersUsers } from './users';

const rootReducers = combineReducers({
  user: reducersUsers,
});

export default rootReducers;
