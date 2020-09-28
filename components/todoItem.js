import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ item, deleTodoHandler }) {
  return (
    <TouchableOpacity onPress={() => deleTodoHandler(item.id)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333' />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 10,
    textTransform: "capitalize",
    flexDirection: 'row'
  },
  itemText: {
    marginLeft: 20,
  }
})