import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ToDo() {
  return (
    <>
      <h1>ToDo List</h1>
      <input type="text" name="toDo" />
      <button type="button">Save</button>
      <ul />
    </>
  );
}
