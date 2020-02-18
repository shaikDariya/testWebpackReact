import React from 'react';
import App from './';
import {render, cleanup} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom';

describe('App', () => {
  afterEach(cleanup);
  it('Shows Loading on load with base route', () => {
    const {container, getByText} = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const loadingDiv = getByText(/Loading.../i);
    expect(container).toContainElement(loadingDiv);
  });
});
