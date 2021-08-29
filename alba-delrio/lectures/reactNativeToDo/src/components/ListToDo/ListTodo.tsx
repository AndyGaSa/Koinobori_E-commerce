import React from 'react';
import { FlatList, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
// import { updateToDo, deleteToDo, createToDo } from '../../redux/actions/actionCreators';
// import todosReducer from '../../redux/reducers/todoReducer';

export default function TodoList() {
    interface Store {
        toDo:ToDos[]
    }
    interface ToDos {

        title: string,
        completed: boolean

    }
    interface Prop {
        item: ToDos
    }
    const toDos = useSelector((store:Store) => store.toDo);

    return (

      <FlatList
        data={toDos}
        renderItem={({ item }:Prop) => (
          <Text>
            {item.title}
          </Text>
        )}
      />

    );
}
