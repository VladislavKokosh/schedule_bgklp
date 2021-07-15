import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import { IGroups } from '../types/groups';

import { getGroupsAsyncFailure, getGroupsAsyncSuccess } from './../actions/groups';

export function* getGroups() {
  try {
    const { data } = yield call(() => axios.get<IGroups[]>('https://my-json-server.typicode.com/iamkoks/shedule_db/group'))
    yield put(getGroupsAsyncSuccess({ groups: data }))
  }
  catch(error) {
    yield put(getGroupsAsyncFailure({ error: error }))
  }
}
