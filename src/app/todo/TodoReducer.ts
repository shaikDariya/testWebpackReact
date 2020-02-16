import {UserType} from './User/UserType';
import {todoActionType} from './TodoActions';
import {SELECT_USER} from './TodoConstants';

type TodoStateType = {
  loading: boolean;
  usersList: ReadonlyArray<UserType>;
  selectedUser: UserType | {};
};

export const todoState: TodoStateType = {
  loading: false,
  usersList: [],
  selectedUser: {},
};

const TodoReducer = (state: TodoStateType, action: todoActionType): TodoStateType => {
  switch (action.type) {
    case SELECT_USER: {
      return {...state, selectedUser: action.payload};
    }
    default:
      return state;
  }
};

export default TodoReducer;
