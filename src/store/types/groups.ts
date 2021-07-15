export const GET_GROUP = 'GROUP/GET GROUP';
export const GET_GROUP_SUCCESS='GROUP/GET GROUP SUCCESS';
export const GET_GROUP_FAILURE='GROUP/GET GROUP FAILURE';
export const SET_GROUP = 'GROUP/SET GROUP';
export const CLEAR_GROUP = 'GROUP/CLEAR GROUP'

export interface IGroups {
  id: string
  title: string
}

export interface GroupsState {
  groups: IGroups[],
  group: string,
  error: string
}

export interface GroupsSuccessPayload {
  groups: IGroups[]
}

export interface GroupsFailurePayload {
  error: string
}

export interface GetGroupsRequest {
  type: typeof GET_GROUP;
}

export type GetGroupsSuccess = {
  type: typeof GET_GROUP_SUCCESS;
  payload: GroupsSuccessPayload;
};

export type GetGroupsFailure = {
  type: typeof GET_GROUP_FAILURE;
  payload: GroupsFailurePayload;
};

export type SetGroupsRequest = {
  type: typeof SET_GROUP;
  payload: string
}

export type ClearGroup = {
  type: typeof CLEAR_GROUP;
}

export type GroupsActions =
| GetGroupsRequest
| GetGroupsSuccess
| GetGroupsFailure
| SetGroupsRequest
| ClearGroup
