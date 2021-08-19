import React from 'react';
import { useSelector } from 'react-redux';
import ToDoCard from './ToDoCard';
import ToDo from './ToDo';

export default function Main() {
  const tasks = [{ title: 'task1', description: 'description of task 1' }, { title: 'task2', description: 'description of task 2' }, { title: 'task3', description: 'description of task 3' }];
  const toDos = useSelector((store) => store.toDos);
  return (
    <main>
      <ToDo />
      <div className="ToDo__cards-container">
        {toDos.map((task) => (
          <ToDoCard
            title={task[0]}
            description={
                task[1]
}
            key={tasks[0]}
          />
        ))}
      </div>
    </main>
  );
}
