import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={props.onDelete} activeOpacity={0.6}>
        <View style={styles.deleteCircle}>
           <View style={styles.innerCircle} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  itemLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  square: {
    width: 12,
    height: 12,
    backgroundColor: '#5856D6',
    borderRadius: 4,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
    maxWidth: '90%',
  },
  deleteCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6
  },
  innerCircle: {
    width: 10,
    height: 2,
    backgroundColor: '#FF3B30',
    borderRadius: 1,
  }
});

export default Task;