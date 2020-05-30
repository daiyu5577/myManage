import { createStore, combineReducers } from 'react-redux';
import userReduce from './user/reduce';

const allReducers = combineReducers({
  user: userReduce,
});

let store = createStore(allReducers);

export default store;
