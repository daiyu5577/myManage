import { createStore, combineReducers } from 'redux';
import userReduce from './user/reduce';

const allReducers = combineReducers({
  user: userReduce,
});

let store = createStore(allReducers);

export default store;
