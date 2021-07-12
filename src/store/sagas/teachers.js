import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import {
  getTeachersAsynsFailure,
  getTeachersAsynsSuccess,
  selectTeacherAsyncFailure,
  selectTeacherAsyncSuccess
} from '../actions/teachers';

import {
  hideLoader,
  showLoader
} from '../actions/loader';

export function* getTeachers() {
  try {
    yield put(showLoader());

    const { data } = yield call(() => axios.get(`https://my-json-server.typicode.com/iamkoks/shedule_db/teachers`))
    yield put(getTeachersAsynsSuccess(data))
    yield put(hideLoader())
  }
  catch(error) {
    yield put(getTeachersAsynsFailure(error))
    yield put(hideLoader())
  }
}

export function* selectTeacher({ payload }) {
  try {
    const { data } = yield call(() => axios.get(`https://my-json-server.typicode.com/iamkoks/shedule_db/teachers`))
    let searchTeacher = data.find(item => item.name === payload)
    yield put(selectTeacherAsyncSuccess(searchTeacher))
  }
  catch(error) {
    yield put(selectTeacherAsyncFailure(error))
  }
}
