import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReduce from './user/reduce';
import userAction from './user/action';

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// all reducers
const allReducers = combineReducers({
  user: userReduce,
});

// createStore
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

// run saga add listen
sagaMiddleware.run(userAction);

export default store;
