import
	{
    ContactsFailurePayload,
    ContactsSuccessPayload,
    GetContactsFailure,
    GetContactsSuccess,
    GetContactsRequest,
    GET_CONTACTS,
    GET_CONTACTS_FAILURE,
    GET_CONTACTS_SUCCESS
  }
from '../types/contacts'

export const getContactsAsync = (): GetContactsRequest => (
	{
		type: GET_CONTACTS,
	}
)

export const getContactsAsyncSuccess = (
  data: ContactsSuccessPayload
) : GetContactsSuccess => (
	{
    type: GET_CONTACTS_SUCCESS,
    payload: data
	}
)

export const getContactsAsyncFailure = (
  error: ContactsFailurePayload
) : GetContactsFailure => (
	{
    type: GET_CONTACTS_FAILURE,
    payload: error
	}
)
