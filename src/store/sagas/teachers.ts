import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import {
  ITeachers,
  SelectTeacherRequest
}  from './../types/teachers';

import {
  getTeachersAsynsFailure,
  getTeachersAsynsSuccess,
  selectTeacherAsynsSuccess,
  selectTeacherAsynsFailure
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

export function* selectTeacher({payload}:SelectTeacherRequest) {
  try {
    const { data } = yield call(() => axios.get<ITeachers[]>(`https://my-json-server.typicode.com/iamkoks/shedule_db/teachers`));
    let searchTeacher = data.find((item:ITeachers) => item.name === payload)
    yield put(selectTeacherAsynsSuccess(searchTeacher));
  }
  catch(error) {
    yield put(selectTeacherAsynsFailure(error))
  }
}
