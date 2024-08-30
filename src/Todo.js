import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "./actions";
import './Todo.css'

import './index.css'

export function Todo(props) {
  const { id, title } = props;

  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  };

  const hadleDelete =() => {
    dispatch(deleteTodo(id))
  }

  return (
    <div>
      {editing ? (
        <div className="form-group">
          <input
            className="form-control"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
          />
          <button className="btn btn-secondary" onClick={handleTodo}>
            Save
          </button>
        </div>
      ) : (
        <li className="list-group-item">
          <p>{title}</p>
          <div className="actions">
            <button
              className="btn btn-warning"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={hadleDelete}>Delete</button>
          </div>
        </li>
      )}
    </div>
  );
}
