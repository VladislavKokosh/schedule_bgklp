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
import { IContacts } from '../types/contacts';

export function* getContacts() {
  try {
    const { data } = yield call(() => axios.get<IContacts[]>('https://my-json-server.typicode.com/iamkoks/shedule_db/contacts'))
    yield put(getContactsAsyncSuccess({contacts : data}))
  }
  catch(error) {
    yield put(getContactsAsyncFailure({error: error}))
  }
}
