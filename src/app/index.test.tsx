import React, {useReducer} from 'react';
import App from './';
import {render} from '@testing-library/react';
import {renderHook, act} from '@testing-library/react-hooks';
import {BrowserRouter} from 'react-router-dom';
import TodoListReducer from './todo/TodoList/TodoListRecuder';
import {todoState} from './todo/TodoReducer';
import '@testing-library/jest-dom';
import {dispatchSetLoading} from './todo/TodoActions';

describe('App', () => {
  it('Loading should render on first load', () => {
    const {result, rerender} = renderHook(() => useReducer(TodoListReducer, todoState));
    const [state, dispatch] = result.current;
    expect(state.loading).toBeTruthy();
    const {getByText} = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(getByText(/Loading.../i)).toBeInTheDocument();
    dispatch(dispatchSetLoading(false));
    console.log(state.loading);
    expect(getByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
