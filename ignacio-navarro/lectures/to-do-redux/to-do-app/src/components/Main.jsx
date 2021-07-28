import React from 'react';
import ToDoCard from './ToDoCard';
import ToDo from './ToDo';

export default function Main() {
  const tasks = [{ title: 'task1', description: 'description of task 1' }, { title: 'task2', description: 'description of task 2' }, { title: 'task3', description: 'description of task 3' }];
  return (
    <main>
      <ToDo />
      <div className="ToDo__cards-container">
        {Object.keys(tasks).map((task) => (
          <ToDoCard
            title={tasks[task].title}
            description={
                tasks[task].description
}
            key={tasks[task].title}
          />
        ))}
      </div>
    </main>
  );
}
