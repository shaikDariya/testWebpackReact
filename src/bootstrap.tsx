import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
  const rootElement = document.getElementById('app');
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    rootElement,
  );
};
renderApp();

//app to work offline and load faster
registerServiceWorker();
