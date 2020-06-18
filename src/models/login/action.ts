import {call, put, takeEvery} from 'redux-saga/effects'
import * as types from './actionTypes'
import {LoginIn} from '../../utils/Api'

export function* loginIn(actions: any) {
  try{
    console.log(actions,'pd--actions');
    const response = yield call(LoginIn, actions.payload)
    yield put({type: 'LOGIN_SUCCESS', response})
    if(response.code==200){
    }
  } catch(e) {
	  console.log(e, 'pd--e');
  }
}

function* allAction() {
  yield takeEvery(types.LOGIN_IN, loginIn);
} 

export default allAction;