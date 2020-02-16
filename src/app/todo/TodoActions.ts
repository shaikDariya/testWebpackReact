import UserType from './User/UserType';
import {FETCH_USER, SELECT_USER} from './TodoConstants';

// Todo Action Types
type FetchUserActionType = {
  type: typeof FETCH_USER;
  payload: ReadonlyArray<UserType>;
};
type SelectUserActionType = {
  type: typeof SELECT_USER;
  payload: UserType;
};

export type todoActionType = FetchUserActionType | SelectUserActionType;

// Action Dispatchers
export const dispatchFetchUser = (users: ReadonlyArray<UserType>): FetchUserActionType => ({
  type: FETCH_USER,
  payload: users,
});

export const dispatchSelectedUser = (user: UserType): SelectUserActionType => ({
  type: SELECT_USER,
  payload: user,
});
