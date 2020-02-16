import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import TodoApp from './todo';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/">
        {/* TodoApp Starts Here*/}
        <TodoApp />
      </Route>
    </Switch>
  </Fragment>
);

export default App;
