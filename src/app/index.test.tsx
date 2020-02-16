import React from 'react';
import App from './';
import {render, container} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import TodoApp from './todo';

describe('App', () => {
  it('render Todo Component With / base route', () => {
    const {container} = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });
});
