export const GET_CONTACTS = 'CONTACTS/GET CONTACTS';
export const GET_CONTACTS_SUCCESS='CONTACTS/GET CONTACTS SUCCESS';
export const GET_CONTACTS_FAILURE='CONTACTS/GET CONTACTS FAILURE';

export interface IContacts {
  name: string
  position: string
  phone: string
}

export interface ContactsState {
  contacts: IContacts[],
  error: string
}

export interface ContactsSuccessPayload {
  contacts: IContacts[]
}

export interface ContactsFailurePayload {
  error: string
}

export interface GetContactsRequest {
  type: typeof GET_CONTACTS;
}

export type GetContactsSuccess = {
  type: typeof GET_CONTACTS_SUCCESS;
  payload: ContactsSuccessPayload;
};

export type GetContactsFailure = {
  type: typeof GET_CONTACTS_FAILURE;
  payload: ContactsFailurePayload;
};

export type ContactsActions =
| GetContactsRequest
| GetContactsSuccess
| GetContactsFailure;
