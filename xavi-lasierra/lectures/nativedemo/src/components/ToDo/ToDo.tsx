import React from 'react';
import { View, Text } from 'react-native';

interface Props {
    toDo: string
}

export default function ToDo({ toDo }: Props) {
  return (
    <View>
      <Text>{toDo}</Text>
    </View>
  );
}
