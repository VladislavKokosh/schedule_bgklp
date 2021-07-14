import { all, takeEvery } from "redux-saga/effects";

import { GET_CONTACTS } from "../types/contacts";

import {
  GET_GROUP,
  SET_GROUP
} from "../types/groups";

import { GET_SCHEDULE } from "../types/schedule";

import {
  GET_TEACHERS,
  SELECT_TEACHER
} from "../types/teachers";

import { getContacts } from "./contacts";

import {
  getGroups,
  setGroups
} from "./groups";

import { getSchedule } from "./schedule";

import {
  getTeachers,
  selectTeacher
} from "./teachers";

function* watchGroups() {
  yield takeEvery(GET_GROUP, getGroups);
  yield takeEvery(SET_GROUP, setGroups);
}

function* watchSchedule() {
  yield takeEvery(GET_SCHEDULE, getSchedule);
}

function* watchTeachers() {
  yield takeEvery(GET_TEACHERS, getTeachers);
  yield takeEvery(SELECT_TEACHER, selectTeacher);
}

function* watchContacts() {
  yield takeEvery(GET_CONTACTS, getContacts);
}

export default function* rootSaga() {
  yield all([
    watchGroups(),
    watchSchedule(),
    watchTeachers(),
    watchContacts()
  ])
}
