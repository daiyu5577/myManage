import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReduce from './user/reduce';
import userAction from './user/action';

interface defReducesMap {
  [key: string]: any;
}

const files = (require as any).context(
  './',
  true,
  /(reduce|action)(\.js|\.ts|\.tsx)$/
);
let reducesMap: defReducesMap = {};
let actionsMap: Array<any> = [];
files.keys().forEach((key: any) => {
  if (key.includes('action')) {
    actionsMap.push(files(key).default);
  }
  if (key.includes('reduce')) {
    const nameSpace: string = key.match(/^\.\/(.*)?\//)[1] || '';
    !nameSpace && new Error('Reduce file naming error');
    reducesMap[nameSpace] = files(key).default;
  }
});

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// all reducers
const allReducers = combineReducers({
  ...reducesMap,
});

// createStore
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

// run saga add listen
const run = sagaMiddleware.run;
actionsMap.forEach((fn: any) => run(fn));

export default store;
