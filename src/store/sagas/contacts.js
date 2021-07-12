import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import {
  getContactsAsyncFailure,
  getContactsAsyncSuccess
} from '../actions/contacts';

import {
  hideLoader,
  showLoader
} from '../actions/loader'

export function* getContacts() {
  try {
    yield put(showLoader());

    const { data } = yield call(() => axios.get('https://my-json-server.typicode.com/iamkoks/shedule_db/contacts'))
    yield put(getContactsAsyncSuccess(data))
    yield put(hideLoader())
  }
  catch(error) {
    yield put(getContactsAsyncFailure(error))
    yield put(hideLoader())
  }
}
