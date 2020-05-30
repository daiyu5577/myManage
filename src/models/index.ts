import { createStore, combineReducers } from 'redux';
import userReduce from './user/reduce';

const reducers = combineReducers({
  userReduce,
});

let store = createStore(reducers);

export default store;
