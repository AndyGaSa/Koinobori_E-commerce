import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 50,
    textAlign: 'center'
  }
});

const Header = () => (
  <View>
    <Text style={styles.title}>
      To Do List

    </Text>
  </View>

);

export default Header;
