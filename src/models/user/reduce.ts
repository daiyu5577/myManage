import initialState, { defInitialState } from './state';
import { UPDATA_LIST } from './actionTypes';

interface defAction {
  readonly type: string;
  readonly payload: any;
}

export default function userReduce(
  state: defInitialState = initialState,
  action: defAction
) {
  switch (action.type) {
    case UPDATA_LIST:
      return Object.assign({}, state, {
        list: action.payload,
      });
    default:
      return state;
  }
}
