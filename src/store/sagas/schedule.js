import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import {
  getScheduleAsynsFailure,
  getScheduleAsynsSuccess
} from '../actions/schedule';

import {
  hideLoader,
  showLoader
} from '../actions/loader';

export function* getSchedule({ payload }) {
  try {
    yield put(showLoader());

    const { data } = yield call(() => axios.get(`https://my-json-server.typicode.com/iamkoks/shedule_db/${payload}`));

    yield put(getScheduleAsynsSuccess(data));
    yield put(hideLoader());
  }
  catch(error) {
    yield put(hideLoader());
    yield put(getScheduleAsynsFailure(error))
  }
}
