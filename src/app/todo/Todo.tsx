import React, {useReducer, useContext, useEffect} from 'react';
import TodoReducer, {todoState} from './TodoReducer';
import SelectUser from './User';
import UserContext from './User/UserContext';
import {UserType} from './User/UserType';
import {dispatchSelectedUser, dispatchFetchUser} from './TodoActions';
import {fetchJson} from '../common/apiUtil';

const Todo = () => {
  const [state, dispatch] = useReducer(TodoReducer, todoState);
  useEffect(() => {
    const usersList = fetchJson('/users', {});
    console.log(usersList);
    dispatch(dispatchFetchUser(usersList));
  }, []);
  const handleChange = (id: number) => {
    const selectedUser = state.usersList.find((user: UserType) => user.id === id);
    console.log(selectedUser);
    dispatch(dispatchSelectedUser(selectedUser));
  };
  return (
    <div className="container">
      <UserContext.Provider value={state.selectedUser}>
        <Test />
      </UserContext.Provider>
      <div className="row justify-content-center">
        <div className="p-2 col-4">
          <select className="form-control">
            <option value="">Select User</option>
          </select>
        </div>
      </div>
      <SelectUser handleChange={handleChange} />
    </div>
  );
};

export default Todo;

const Test = () => {
  const userId = useContext(UserContext);
  return <div>{userId.id}</div>;
};
