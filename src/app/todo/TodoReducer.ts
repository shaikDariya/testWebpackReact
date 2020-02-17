import {UserType} from './User/UserType';
import {todoActionType} from './TodoActions';
import {SELECT_USER, FETCH_USER, TODO_LOADING} from './TodoConstants';

type TodoStateType = {
  loading: boolean;
  usersList: ReadonlyArray<UserType>;
  selectedUser: UserType | {};
};

export const todoState: TodoStateType = {
  loading: true,
  usersList: [],
  selectedUser: {},
};

const TodoReducer = (state: TodoStateType, action: todoActionType): TodoStateType => {
  switch (action.type) {
    case TODO_LOADING: {
      return {...state, loading: action.payload};
    }
    case FETCH_USER: {
      return {...state, usersList: action.payload};
    }
    case SELECT_USER: {
      return {...state, selectedUser: action.payload};
    }
    default:
      return state;
  }
};

export default TodoReducer;
