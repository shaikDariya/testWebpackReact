import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState, useRef} from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import {TodoType} from '../TodoType';

type EditableCellProps = {
  todo: TodoType;
  updateEdit: (todo: TodoType) => any;
  updateToDone: (todo: TodoType) => any;
  deleteTodo: (todo: TodoType) => any;
};

const EditableCell = ({todo, updateEdit, updateToDone, deleteTodo}: EditableCellProps) => {
  const input = useRef<any>();
  const handleCheck = () => {
    if (!checked) {
      updateToDone(todo);
    }
    SetChecked(!checked);
  };
  const [edit, setEdit] = useState(false);
  const [checked, SetChecked] = useState(todo.completed);
  const closeEdit = () => {
    const title = input.current.value;
    if (title !== todo.title) {
      updateEdit({...todo, title});
    }
    setEdit(false);
  };
  useEffect(() => {
    if (input && input.current) {
      input.current.value = todo.title;
      input.current.focus();
    }
  }, [edit]);
  return (
    <div className="d-flex">
      <div>
        <FormCheck type="checkbox" value={checked} onChange={handleCheck} />
      </div>
      <div className="col" onDoubleClick={() => setEdit(true)}>
        {edit ? (
          <FormControl type="text" onBlur={closeEdit} className="form-control" ref={input} />
        ) : (
          todo.title
        )}
      </div>
      <div className="justify-content-space-around">
        {edit && (
          <Button className="m-1" variant="primary" size="sm" onClick={closeEdit}>
            Update
          </Button>
        )}
        <Button variant="primary" size="sm" onClick={() => deleteTodo(todo)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

type NewTableCellProps = {
  onSave: ({title, completed}: {title: string; completed: boolean}) => any;
  onCancel: () => any;
};
const NewTableCell = ({onSave, onCancel}: NewTableCellProps) => {
  const input = useRef<any>();
  const checkbox = useRef<any>();
  const saveTodo = () => {
    const newTodoVal = {
      title: input.current.value,
      completed: checkbox.current.value,
    };
    onSave(newTodoVal);
  };
  return (
    <div className="d-flex justify-content-space-around">
      <div>
        <FormCheck type="checkbox" ref={checkbox} />
      </div>
      <div className="col">
        <FormControl type="text" className="form-control" ref={input} />
      </div>
      <div>
        <Button variant="primary" size="sm" onClick={saveTodo}>
          Save
        </Button>
        <Button variant="primary" size="sm" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
export {NewTableCell, EditableCell};
