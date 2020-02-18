import React, {useContext, useEffect, useReducer, Fragment} from 'react';
import UserContext from './../User/UserContext';
import TodoListReducer, {todoState} from './TodoListRecuder';
import {
  dispatchFetchTodo,
  dispatchSetLoading,
  dispatchSetIsNewTodo,
  dispatchAddTodo,
} from './TodoListActions';
import {fetchJson} from '../../common/apiUtil';
import {TodoType} from './TodoType';
import Button from 'react-bootstrap/Button';
import {EditableCell, NewTableCell} from './EditableCell';
import Spinner from './../../common/spinnerElm';
import {historyService} from '../history/historyService';

const TodoList = () => {
  const userId = useContext(UserContext);
  const [state, dispatch] = useReducer(TodoListReducer, todoState);
  useEffect(() => {
    async function fetchData() {
      dispatch(dispatchSetLoading(true));
      const todoList = await fetchJson(`/todos/?userId=${userId.id}`);
      dispatch(dispatchFetchTodo(todoList));
      dispatch(dispatchSetLoading(false));
    }
    fetchData();
  }, [userId]);
  const updateEdit = (todo: TodoType) => {
    const latestList = state.todoList.map((t: TodoType) => {
      if (t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    });
    dispatch(dispatchFetchTodo(latestList));
    historyService.addHistory({
      userId: userId.id,
      action: `${userId.name} Updated todo#${todo.id} titile to ${todo.title}`,
      time: Math.floor(Date.now() / 1000),
    });
  };
  const deleteTodo = (todo: TodoType) => {
    const filterdList = state.todoList.filter((tDo: TodoType) => tDo.id !== todo.id);
    dispatch(dispatchFetchTodo(filterdList));
    historyService.addHistory({
      userId: userId.id,
      action: `${userId.name} Deleted todo#${todo.id}. `,
      time: Math.floor(Date.now() / 1000),
    });
  };
  const addTodo = ({title, completed}: {titile: string; completed: boolean}) => {
    const newTodo: TodoType = {
      title,
      completed,
      id: state.todoList.length + 1,
      userId: userId.id,
    };
    dispatch(dispatchAddTodo(newTodo));
    dispatch(dispatchSetIsNewTodo(false));
    historyService.addHistory({
      userId: userId.id,
      action: `${userId.name} Created todo#${newTodo.id}.`,
      time: Math.floor(Date.now() / 1000),
    });
  };
  const updateToDone = (todo: TodoType) => {
    const latestList = state.todoList.map((t: TodoType) => {
      if (t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    });
    dispatch(dispatchFetchTodo(latestList));
    historyService.addHistory({
      userId: userId.id,
      action: `${userId.name} Changed todo#${todo.id} to done.`,
      time: Math.floor(Date.now() / 1000),
    });
  };
  return (
    <Fragment>
      {state.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Button className="pg" size="sm" onClick={() => dispatch(dispatchSetIsNewTodo(true))}>
            Add Todo
          </Button>
          <table className="table">
            <tbody>
              {state.isNewTodo && (
                <tr>
                  <td>
                    <NewTableCell onSave={addTodo} onCancel={() => dispatch(dispatchSetIsNewTodo(false))} />
                  </td>
                </tr>
              )}
              {state.todoList.map((todo: TodoType) => (
                <tr key={todo.id.toString()}>
                  <td className="col">
                    <EditableCell
                      todo={todo}
                      updateEdit={(eTodo) => updateEdit(eTodo)}
                      deleteTodo={(dId) => deleteTodo(dId)}
                      updateToDone={updateToDone}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
};
export default TodoList;
