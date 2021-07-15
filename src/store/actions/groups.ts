import { ClearGroup } from './../types/groups';
import
	{
		GET_GROUP,
		GET_GROUP_FAILURE,
		GET_GROUP_SUCCESS,
		SET_GROUP,
		CLEAR_GROUP,
    GetGroupsRequest,
    GetGroupsSuccess,
    GetGroupsFailure,
    GroupsSuccessPayload,
    GroupsFailurePayload
	}
from '../types/groups'

export const getGroupsAsync = (): GetGroupsRequest => ({
	type: GET_GROUP
})

export const getGroupsAsyncSuccess = (
	data: GroupsSuccessPayload
) : GetGroupsSuccess => ({
	type: GET_GROUP_SUCCESS,
	payload: data
})

export const getGroupsAsyncFailure = (
  error: GroupsFailurePayload
) : GetGroupsFailure => ({
	type: GET_GROUP_FAILURE,
	payload: error
})

export const setGroupsAsyncSuccess = (
  data: string
) => ({
	type: SET_GROUP,
	payload: data
})

export const clearGroup = (): ClearGroup => ({
	type: CLEAR_GROUP
})
