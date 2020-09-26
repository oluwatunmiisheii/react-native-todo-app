import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [newTodo, setNewTodo] = useState('')
  const changeHandler = val => {
    setNewTodo(val)
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />
      <Button title='add todo' color='coral' onPress={() => submitHandler(newTodo)} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})