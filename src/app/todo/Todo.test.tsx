import React, {useReducer} from 'react';
import {render, cleanup} from '@testing-library/react';
import {renderHook, act} from '@testing-library/react-hooks';
import Todo from './';
import TodoReducer, {todoState} from './TodoReducer';
import '@testing-library/jest-dom';

describe('Todo App', () => {
  afterEach(cleanup);
  it('Should show Loading on default', () => {
    const {result, rerender} = renderHook(() => useReducer(TodoReducer, todoState));
    const [state, dispatch] = result.current;
    expect(state.loading).toBeTruthy();
  });
});
