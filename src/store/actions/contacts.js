import axios from 'axios'
import
	{
    GET_CONTACTS,
    GET_CONTACTS_FAILURE
  }
from '../types/contatcs'
import { showLoader, hideLoader } from './loader'

export const getContacts = contacts => (
	{
		type: GET_CONTACTS,
		payload: contacts
	}
)

export const getContactsFailure = error => (
	{
			type: GET_CONTACTS_FAILURE,
			payload: error
	}
)

export const getContactssAsync = () => {
	return async (dispatch) => {
		try {
      dispatch(showLoader())
			const { data } = await axios.get('https://my-json-server.typicode.com/iamkoks/shedule_db/contacts')
			dispatch(getContacts(data))
      dispatch(hideLoader())
		}
		catch(error) {
			dispatch(getContactsFailure(error))
		}
	}
}
