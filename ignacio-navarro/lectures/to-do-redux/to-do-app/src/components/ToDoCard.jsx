/* eslint-disable react/prop-types */
import React from 'react';
import './ToDoCard.css';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actions/action.types';

export default function ToDoCard({ title, description }) {
  // eslint-disable-next-line spaced-comment
  //const ToDos = useSelector((store) => store.ToDos);
  const dispatch = useDispatch();
  function deleteTask() {
    dispatch({
      type: actionTypes.DELETE_TODO,
      toDo: description,
    });
  }
  return (
    <div className="ToDoClass__container">
      <h3>
        {title}
      </h3>
      <p>{description}</p>
      <button className="ToDoCard__button" onClick={deleteTask} type="button">delete</button>
      <button className="ToDoCard__button" type="button">edit</button>
    </div>
  );
}
