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
