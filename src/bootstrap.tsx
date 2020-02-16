import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import TodoApp from './app';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
  const rootElement = document.getElementById('app');
  ReactDOM.render(
    <Router>
      <TodoApp />
    </Router>,
    rootElement,
  );
};
renderApp();

//app to work offline and load faster
registerServiceWorker();
