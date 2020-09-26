import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const initTodos = [
    { text: 'buy coffee', id: '1' },
    { text: 'create an app', id: '2' },
    { text: 'play on the switch', id: '3' }
  ]
  const [todos, setTodos] = useState(initTodos)
  const deleTodoHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }
  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          ...prevTodos,
          { text: text, id: Math.random().toString() }
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        console.log('dismissed keyboard')
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} deleTodoHandler={deleTodoHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
