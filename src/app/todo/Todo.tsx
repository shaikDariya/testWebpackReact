import React, {useReducer, useEffect, Fragment} from 'react';
import TodoReducer, {todoState} from './TodoReducer';
import SelectUser from './User';
import UserContext from './User/UserContext';
import {UserType} from './User/UserType';
import {dispatchSelectedUser, dispatchFetchUser, dispatchSetLoading} from './TodoActions';
import {fetchJson} from '../common/apiUtil';
import Spinner from '../common/spinnerElm';
import TodoTabs from './Tabs';
import {Switch, Route, useHistory} from 'react-router-dom';
import TodoList from './TodoList';
import Alert from 'react-bootstrap/Alert';
import History from './history/History';

const Todo = () => {
  const [state, dispatch] = useReducer(TodoReducer, todoState);
  const history = useHistory();
  useEffect(() => {
    const fetchFakeApi = async () => {
      const usersList = await fetchJson('/users');
      dispatch(dispatchFetchUser(usersList));
      dispatch(dispatchSetLoading(false));
    };
    fetchFakeApi();
  }, []);
  const handleChange = (id: string) => {
    const selectedUser = state.usersList.find((user: UserType) => user.id.toString() === id);
    dispatch(dispatchSelectedUser(selectedUser));
    history.push('/todo');
  };
  return (
    <div className="container">
      {state.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <SelectUser handleChange={handleChange} users={state.usersList} />
          {state.selectedUser && state.selectedUser.id ? (
            <Fragment>
              <TodoTabs />
              <UserContext.Provider value={state.selectedUser}>
                <div className="tab-content">
                  <Switch>
                    <Route path="/todo" component={TodoList} />
                    <Route path="/history" component={History} />
                  </Switch>
                </div>
              </UserContext.Provider>
            </Fragment>
          ) : (
            <Alert variant="primary">Please Select the User</Alert>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Todo;
