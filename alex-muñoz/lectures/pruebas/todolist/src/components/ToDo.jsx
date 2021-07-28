import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/actionsTypes';

export default function ToDo() {
  const toDos = [useSelector((store) => store.toDos)];
  const dispatch = useDispatch();
  const { inputValue } = useState();
  return (
    <section>
      <input
        type="text"
        name="todo"
        value={inputValue}
      />
      <div className="buttons-container">
        <button
          type="button"
          onClick={() => dispatch({
            type: actionTypes.CREATE_TODO,
            toDo: inputValue
          })}

        >
          Add Task

        </button>
        <button type="button">Remove Task</button>
        <button type="button">Uptdate Task</button>
        <button type="button">Task Order</button>
      </div>
      <ul>
        {toDos.map((todo) => <li>{todo}</li>)}

      </ul>
    </section>
  );
}
