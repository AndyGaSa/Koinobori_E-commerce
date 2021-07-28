import React from 'react';

function ToDo() {
    return (
        <>
            <h1>TODO LIST</h1>
            <input type="text" name="todo" />
            <button type="button">Save</button>
            <button type="button">Upgrade</button>
            <ul> {
                toDos.map((todo) => <li>{todo}</li>)
                
                }
            </ul>
        </>
    );
}


export default ToDo;