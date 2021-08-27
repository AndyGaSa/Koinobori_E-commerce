import toDosActions from './toDos.actions';

export default function addToDo(data: string) {
  return {
    type: toDosActions.ADD_TODO,
    data
  };
}
