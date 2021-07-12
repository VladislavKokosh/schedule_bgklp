import
	{
    GET_CONTACTS,
    GET_CONTACTS_FAILURE,
    GET_CONTACTS_SUCCESS
  }
from '../types/contatcs'

export const getContactsAsync = () => (
	{
		type: GET_CONTACTS,
	}
)

export const getContactsAsyncSuccess = data => (
	{
			type: GET_CONTACTS_SUCCESS,
			payload: data
	}
)

export const getContactsAsyncFailure = error => (
	{
			type: GET_CONTACTS_FAILURE,
			payload: error
	}
)
