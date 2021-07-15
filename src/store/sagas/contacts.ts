import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import { IContacts } from '../types/contacts';

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
    yield put(showLoader())
    const { data } = yield call(() => axios.get<IContacts[]>('https://my-json-server.typicode.com/iamkoks/shedule_db/contacts'))
    yield put(getContactsAsyncSuccess({contacts : data}))
    yield put(hideLoader())
  }
  catch(error) {
    yield put(getContactsAsyncFailure({error: error}))
    yield put(hideLoader())
  }
}
