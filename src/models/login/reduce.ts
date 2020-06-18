import initialState, { defInitialState } from './state';
import * as types from './actionTypes';

interface defAction {
  readonly type: string;
  readonly payload: any;
}

export default function userReduce(
  state: defInitialState = initialState,
  action: defAction
) {
  switch (action.type) {
    case types.UPDATA_LOGIN_DATA:
      return Object.assign({}, state, {
        loginData: action.payload,
      });
    default:
      return state;
  }
}
