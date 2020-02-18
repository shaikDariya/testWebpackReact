import React from 'react';
import TodoReducer, {todoState} from './TodoReducer';
import {mockUser} from './../mock/user';
import {TODO_LOADING, FETCH_USER, SELECT_USER} from './TodoConstants';

describe('TodoReducer', () => {
  it('Should return default state', () => {
    expect(todoState).toEqual({
      loading: true,
      usersList: [],
      selectedUser: {},
    });
  });
  it('Should return updated Loading State with SET_LOADING', () => {
    expect(TodoReducer(todoState, {type: TODO_LOADING, payload: false})).toEqual({
      loading: false,
      usersList: [],
      selectedUser: {},
    });
  });
  it('Should return updated userList with FETCH_USER', () => {
    expect(TodoReducer(todoState, {type: FETCH_USER, payload: [mockUser]})).toEqual({
      loading: true,
      usersList: [mockUser],
      selectedUser: {},
    });
  });
  it('Should return updated userList with SELECT_USER', () => {
    expect(TodoReducer(todoState, {type: SELECT_USER, payload: mockUser})).toEqual({
      loading: true,
      usersList: [],
      selectedUser: mockUser,
    });
  });
});
