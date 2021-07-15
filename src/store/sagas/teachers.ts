import { ITeachers }  from './../types/teachers';
import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import {
  getTeachersAsynsFailure,
  getTeachersAsynsSuccess
} from '../actions/teachers';

import {
  hideLoader,
  showLoader
} from '../actions/loader';

export function* getTeachers() {
  try {
    yield put(showLoader());

    const { data } = yield call(() => axios.get<ITeachers[]>(`https://my-json-server.typicode.com/iamkoks/shedule_db/teachers`))
    yield put(getTeachersAsynsSuccess({teachers: data}))
    yield put(hideLoader())
  }
  catch(error) {
    yield put(getTeachersAsynsFailure(error))
    yield put(hideLoader())
  }
}
