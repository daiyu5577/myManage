import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from './actionTypes';
// import Api from ...

export function* fetchList(action: any) {
  // try {
  //   const user = yield call(Api.fetchList, action.payload.userId);
  //   yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  // } catch (e) {
  //   yield put({ type: "USER_FETCH_FAILED", message: e.message });
  // }
}

function* allAction() {
  yield takeEvery(types.GET_LIST, fetchList);
}

export default allAction;
