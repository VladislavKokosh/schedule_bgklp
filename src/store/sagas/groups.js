import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import {
  getGroupsAsyncFailure,
  getGroupsAsyncSuccess,
  setGroupsAsyncFailure,
  setGroupsAsyncSuccess
} from '../actions/groups';

export function* getGroups() {
  try {
    const { data } = yield call(() => axios.get('https://my-json-server.typicode.com/iamkoks/shedule_db/group'));
    yield put(getGroupsAsyncSuccess(data));
  }
  catch(error) {
    yield put(getGroupsAsyncFailure(error))
  }
}

export function* setGroups({ payload }) {
  try {
    yield put(setGroupsAsyncSuccess(payload))
  }
  catch(error) {
    yield put(setGroupsAsyncFailure(error))
  }
}
