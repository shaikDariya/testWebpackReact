import {TodoType} from './TodoType';
import {TODO_LIST_LOADING, ADD_TODO, FETCH_TODO, SET_NEW_TODO} from './TodoListConstants';

// Todo Action Types
type FetchTodoActionType = {
  type: typeof FETCH_TODO;
  payload: ReadonlyArray<TodoType>;
};
type AddTodoActionType = {
  type: typeof ADD_TODO;
  payload: TodoType;
};
type SetTodoLoading = {
  type: typeof TODO_LIST_LOADING;
  payload: boolean;
};
type SetIsNewTodo = {
  type: typeof SET_NEW_TODO;
  payload: boolean;
};

export type TodoListActionType = FetchTodoActionType | AddTodoActionType | SetTodoLoading | SetIsNewTodo;

// Action Dispatchers
export const dispatchFetchTodo = (todos: ReadonlyArray<TodoType>): FetchTodoActionType => ({
  type: FETCH_TODO,
  payload: todos,
});

export const dispatchAddTodo = (todo: TodoType): AddTodoActionType => ({
  type: ADD_TODO,
  payload: todo,
});

export const dispatchSetLoading = (loading: boolean): SetTodoLoading => ({
  type: TODO_LIST_LOADING,
  payload: loading,
});

export const dispatchSetIsNewTodo = (loading: boolean): SetIsNewTodo => ({
  type: SET_NEW_TODO,
  payload: loading,
});
