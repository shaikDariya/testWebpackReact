import UserType from './User/UserType';
import {FETCH_USER, SELECT_USER, TODO_LOADING} from './TodoConstants';

// Todo Action Types
type FetchUserActionType = {
  type: typeof FETCH_USER;
  payload: ReadonlyArray<UserType>;
};
type SelectUserActionType = {
  type: typeof SELECT_USER;
  payload: UserType;
};
type SetTodoLoading = {
  type: typeof TODO_LOADING;
  payload: boolean;
};

export type todoActionType = FetchUserActionType | SelectUserActionType | SetTodoLoading;

// Action Dispatchers
export const dispatchFetchUser = (users: ReadonlyArray<UserType>): FetchUserActionType => ({
  type: FETCH_USER,
  payload: users,
});

export const dispatchSelectedUser = (user: UserType): SelectUserActionType => ({
  type: SELECT_USER,
  payload: user,
});

export const dispatchSetLoading = (loading: boolean): SetTodoLoading => ({
  type: TODO_LOADING,
  payload: loading,
});
