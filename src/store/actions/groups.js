import axios from 'axios'
import
	{
		CLEAR_GROUP,
		GET_GROUP,
		GET_GROUP_FAILURE,
		SET_GROUP
	}
from '../types/groups'

export const getGroups = groups => (
	{
		type: GET_GROUP,
		payload: groups
	}
)

export const getGroupsFailure = error => (
	{
			type: GET_GROUP_FAILURE,
			payload: error
	}
)

export const getGroupsAsync = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get('https://my-json-server.typicode.com/iamkoks/shedule_db/group')
			dispatch(getGroups(data))
		}
		catch(error) {
			dispatch(getGroupsFailure(error))
		}
	}
}

export const setGroups = group => (
	{
		type: SET_GROUP,
		payload: group
	}
)

export const clearGroup = () => ({
	type: CLEAR_GROUP
})
