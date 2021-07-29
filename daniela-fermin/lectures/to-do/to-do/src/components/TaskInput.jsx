import React from 'react';

export default function TaskInput() {
  return (
    <div className="input-group mb-3">
      <label htmlFor="new-task">
        <span className="input-group-text" id="inputGroup-sizing-default">Write task:</span>
        <input type="text" value="Task" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </label>
    </div>

  );
}
