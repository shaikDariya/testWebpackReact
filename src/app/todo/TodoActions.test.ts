import {dispatchFetchUser, dispatchSelectedUser, dispatchSetLoading} from './TodoActions';
import {mockUser} from './../mock/user';
import {TODO_LOADING, FETCH_USER, SELECT_USER} from './TodoConstants';

describe('TodoActions', () => {
  it('dispatchFetchUser should return FetchUserAction', () => {
    expect(dispatchFetchUser([mockUser])).toEqual({
      type: FETCH_USER,
      payload: [mockUser],
    });
  });
  it('dispatchSelectedUser should return SelectUserAction', () => {
    expect(dispatchSelectedUser(mockUser)).toEqual({
      type: SELECT_USER,
      payload: mockUser,
    });
  });
  it('dispatchSetLoading should return SetTodoLoading', () => {
    expect(dispatchSetLoading(false)).toEqual({
      type: TODO_LOADING,
      payload: false,
    });
  });
});
