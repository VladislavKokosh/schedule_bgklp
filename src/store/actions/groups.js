import
	{
		GET_GROUP,
		GET_GROUP_FAILURE,
		GET_GROUP_SUCCESS,
		SET_GROUP,
		SET_GROUP_FAILURE,
		SET_GROUP_SUCCESS,
		CLEAR_GROUP
	}
from '../types/groups'

export const getGroupsAsync = () => ({
	type: GET_GROUP
})

export const getGroupsAsyncSuccess = data => ({
	type: GET_GROUP_SUCCESS,
	payload: data
})

export const getGroupsAsyncFailure = data => ({
	type: GET_GROUP_FAILURE,
	payload: data
})

export const setGroupsAsync = group => (
	{
		type: SET_GROUP,
		payload: group
	}
)

export const setGroupsAsyncSuccess = data => ({
	type: SET_GROUP_SUCCESS,
	payload: data
})

export const setGroupsAsyncFailure = data => ({
	type: SET_GROUP_FAILURE,
	payload: data
})

export const clearGroup = () => ({
	type: CLEAR_GROUP
})
