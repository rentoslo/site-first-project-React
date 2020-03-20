import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducersUsers } from './users';

const rootReducers = combineReducers({
  user: reducersUsers,
  form: formReducer,
});

export default rootReducers;
