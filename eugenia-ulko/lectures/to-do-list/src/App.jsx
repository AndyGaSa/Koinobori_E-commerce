import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import actionTypes from './Redux/actions/action.types';

function ToDo() {
  const dispatch = useDispatch();
  const toDos = useSelector((store) => toDos);
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <div className="To-do-list-container">
        <h2>ToDo List</h2>
        <label htmlFor="to-do-input">

          <input
            type="text"
            name=""
            className="to-do-input"
            value={inputValue}
            onChange={((event) => setInputValue(event.target.value))}
          />
        </label>
        <ul className="items-container">
          {
            toDos.map((toDo) => (
              <li className="to-do-item">
                <p>{toDo}</p>
                <button
                  type="button"
                  onClick={() => dispatch({
                    type: actionTypes.DELETE_TODO,
                    toDo
                  })}
                >
                  x

                </button>
              </li>
            ))
          }
        </ul>
        <button
          className="submit-button"
          type="button"
          onClick={() => dispatch({
            type: actionTypes.CREATE_TODO,
            toDo: inputValue
          })}
        >
          Add item

        </button>
      </div>
    </>
  );
}

export default ToDo;
