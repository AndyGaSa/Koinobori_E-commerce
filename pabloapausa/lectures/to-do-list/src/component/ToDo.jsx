import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../redux/actions/action.types';
import Header from './Header';

function ToDo() {
  // Accede a Store, hasta encontrar 'toDos'.
  const toDos = useSelector((store) => store.toDos);
  const dispatch = useDispatch();

  const [input, setInput] = useState();
  const [index, setIndex] = useState();

  function create() {
    // Si el input no está vacío.
    if (!input.trim()) return;

    // Ejecuta acciones de Redux.
    dispatch({
      // Llamando a la función en type.
      type: actionTypes.CREATE_TODO,
      // Con 'input' como parámetro.
      toDo: input,
    });

    // Resetea el input.
    setInput('');
  }

  function update() {
    // Si el input no está vacío.
    if (!input.trim()) return;

    // Ejecuta acciones de Redux.
    dispatch({
      // Llamando a la función en type.
      type: actionTypes.UPDATE_TODO,
      // Con 'input' como parámetro.
      toDo: input,
      index,
    });

    // Resetea el input.
    setInput('');
  }

  return (
    <>
      <Header />
      <input
        type="text"
        name="todo"
        value={input}
        onChange={((event) => setInput(event.target.value))}
      />

      <button type="button" onClick={create}>Create</button>
      <button type="button" onClick={update}>Update</button>

      <ul>
        {
            toDos.map((toDo, toDoIndex) => (
              <li>
                <button
                  type="button"
                  onClick={() => { setInput(toDo); setIndex(toDoIndex); }}
                >
                  {toDo}
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: actionTypes.DELETE_TODO, toDo })}
                >
                  x
                </button>
              </li>
            ))
        }
      </ul>
    </>
  );
}

/* 'onChange': por cada cambio en el input, ejecuta
un callback, que llama a la función 'setInput', pasando
su valor como parámetro, ('event.target.value') */

/* 'const toDos': */

export default ToDo;
