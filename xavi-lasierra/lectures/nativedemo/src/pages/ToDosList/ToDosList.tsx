import React, { useState } from 'react';
import {
  TextInput, ScrollView, View, Text, TouchableOpacity, FlatList
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ToDo from '../../components/ToDo/ToDo';

import addToDo from '../../redux/actions/toDos.creator';

export default function TopBar() {
  interface ToDoObject {
    toDo: string
    id: string
  }

  interface storeObject {
    toDos: ToDoObject[]
  }

  interface RenderInterface {
    item: ToDoObject
  }

  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState('');
  const toDos = useSelector((store: storeObject) => store.toDos);

  function handleInputChange(text: string) {
    setNewToDo(text);
  }

  function handlePress() {
    const trimmedToDo = newToDo.trim();
    if (trimmedToDo) {
      dispatch(addToDo(trimmedToDo));
    }
  }

  function renderToDo({ item }: RenderInterface) {
    return <ToDo toDo={item.toDo} />;
  }

  return (
    <View>
      <View>
        <TextInput
          placeholder="Add new To Do"
          value={newToDo}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity
          onPress={handlePress}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={toDos}
          renderItem={renderToDo}
          keyExtractor={({ id }) => id}
        />
      </ScrollView>
    </View>
  );
}
