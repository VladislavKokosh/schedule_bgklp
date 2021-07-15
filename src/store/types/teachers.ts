export const GET_TEACHERS = 'TEACHERS/GET TEACHERS';
export const GET_TEACHERS_SUCCESS='TEACHERS/GET TEACHERS SUCCESS';
export const GET_TEACHERS_FAILURE='TEACHERS/GET TEACHERS FAILURE';
export const SELECT_TEACHER = 'TEACHERS/SELECT TEACHER'
export const SELECT_TEACHERS_SUCCESS = 'TEACHERS/SELECT TEACHERS SUCCESS'
export const SELECT_TEACHERS_FAILURE = 'TEACHERS/SELECT TEACHERS FAILURE'

export interface ITeachers {
  id: string
  img: string
  name: string
  about: string
}

export interface TeachersState {
  teachers: ITeachers[],
  error: string,
  selectTeacher: ITeachers
}

export interface TeachersSuccessPayload {
  teachers: ITeachers[]
}

export interface SelectTeacherSuccessPayload {
  selectTeacher: ITeachers
}

export interface TeachersFailurePayload {
  error: string
}

export interface GetTeachersRequest {
  type: typeof GET_TEACHERS;
}

export type GetTeachersSuccess = {
  type: typeof GET_TEACHERS_SUCCESS;
  payload: TeachersSuccessPayload;
};

export type GetTeachersFailure = {
  type: typeof GET_TEACHERS_FAILURE;
  payload: TeachersFailurePayload;
};

export type SelectTeacherRequest = {
  type: typeof SELECT_TEACHER;
  payload: string
}

export type SelectTeacherSuccess = {
  type: typeof SELECT_TEACHERS_SUCCESS;
  payload: SelectTeacherSuccessPayload;
};

export type SelectTeacherFailure = {
  type: typeof SELECT_TEACHERS_FAILURE;
  payload: TeachersFailurePayload;
};

export type TeachersActions =
| GetTeachersRequest
| GetTeachersSuccess
| GetTeachersFailure
| SelectTeacherRequest
| SelectTeacherSuccess
| SelectTeacherFailure
