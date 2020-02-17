import {TODO_LIST_LOADING, FETCH_TODO, ADD_TODO, SET_NEW_TODO} from './TodoListConstants';
import {TodoType} from './TodoType';
import {TodoListActionType} from './TodoListActions';

type TodoListStateType = {
  loading: boolean;
  todoList: ReadonlyArray<TodoType>;
  isNewTodo: boolean;
};

export const todoState: TodoListStateType = {
  loading: true,
  todoList: [],
  isNewTodo: false,
};

const TodoListReducer = (state: TodoListStateType, action: TodoListActionType): TodoStateType => {
  switch (action.type) {
    case TODO_LIST_LOADING: {
      return {...state, loading: action.payload};
    }
    case FETCH_TODO: {
      return {...state, todoList: action.payload};
    }
    case ADD_TODO: {
      return {...state, todoList: [...state.todoList, action.payload]};
    }
    case SET_NEW_TODO: {
      console.log('kkkkkkkk');
      return {...state, isNewTodo: action.payload};
    }
    default:
      return state;
  }
};

export default TodoListReducer;
