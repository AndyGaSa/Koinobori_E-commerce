/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/action.types';
import Header from './Header';
import './ToDo.css';

export default function ToDo() {
  const dispatch = useDispatch();
  const toDos = useSelector((store) => store.toDos);
  const [newToDo, setToDo] = useState('');
  const [button, setButton] = useState('show-button');
  const [updateButton, setUpdateButton] = useState('updateButton');
  const [index, setIndex] = useState('');
  const [updateValue, setUpdateValue] = useState('');
  function create() {
    if (!newToDo.trim()) return;
    dispatch({
      type: actionTypes.CREATE_TODO,
      toDo: newToDo
    });
    setToDo('');
  }
  function modify() {
    setButton('button');
    setUpdateButton('show-button');
  }
  function update() {
    setUpdateButton('updateButton');
    setButton('show-button');
  }

  return (

    <div className="list">
      <Header />
      <div className="todo">
        <input
          type="text"
          name="ToDo"
          value={newToDo}
          onChange={(event) => setToDo(event.target.value)}
        />
        <button type="button" className="addButton" onClick={create}>+</button>
      </div>
      <ul>
        {
            toDos.map((toDo, toDoIndex) => (
              <li data-testid="list-item-&{toDo}">

                <input
                  type="text"
                  name="name"
                  defaultValue={toDo}
                  className="inputList"
                  placeHolder="name"
                  onChange={((event) => setUpdateValue(event.target.value))}
                  onClick={() => {
                    modify();
                    setIndex(toDoIndex);
                  }}
                />
                <button
                  className={button}
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: actionTypes.DELETE_TODO,
                      toDo
                    }); modify();
                  }}
                >
                  x
                </button>
                <button
                  type="button"
                  className={updateButton}
                  onClick={() => {
                    dispatch({
                      type: actionTypes.UPDATE_TODO,
                      toDo: updateValue,
                      index
                    });
                    update();
                  }}
                >
                  Update

                </button>
              </li>
            ))
        }
      </ul>
    </div>
  );
}
