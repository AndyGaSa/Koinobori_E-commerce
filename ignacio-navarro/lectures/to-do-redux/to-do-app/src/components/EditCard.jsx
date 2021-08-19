/* eslint-disable react/prop-types */
import React from 'react';
import './ToDoCard.css';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actions/action.types';

export default function EditCard({ title, description }) {
  // eslint-disable-next-line spaced-comment
  //const ToDos = useSelector((store) => store.ToDos);
  const [isInput, setInput] = useState(false);
  const dispatch = useDispatch();
  function deleteTask() {
    dispatch({
      type: actionTypes.DELETE_TODO,
      toDo: description,
    });
  }
  function updateTask() {
    dispatch({
      type: actionTypes.DELETE_TODO,
      toDo: description,
    });
  }
  return (
    <div className="ToDoClass__container">
      <input type="text" value={title} />
      <input type="text" value={description} />
      <button className="ToDoCard__button" onClick={deleteTask} type="button">delete</button>
      <button className="ToDoCard__button" onClick={updateTask} type="button">edit</button>
    </div>
  );
}
