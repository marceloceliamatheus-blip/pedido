import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, ScrollView, Platform, StatusBar } from 'react-native';
import Task from './src/components/Task'; 

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task && task.trim().length > 0) {
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  }

  const completeTask = (index) => {
    setTaskItems(taskItems.filter((_, i) => i !== index));
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* 1. ScrollView para as tarefas */}
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Chega de Projeto plmds</Text>
          <View style={styles.items}>
            {taskItems.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyEmoji}>🎉</Text>
                <Text style={styles.emptyText}>Tudo uma merda por aqui !</Text>
              </View>
            ) : (
              taskItems.map((item, index) => (
                <Task key={index} text={item} onDelete={() => completeTask(index)} />
              ))
            )}
          </View>
        </View>
      </ScrollView>

      {/* 2. KeyboardAvoidingView ajustado para subir com o teclado */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder={'Nova tarefa...'} 
          placeholderTextColor={'#999'}
          value={task} 
          onChangeText={text => setTask(text)} 
        />
        <TouchableOpacity onPress={() => handleAddTask()} activeOpacity={0.7}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F2F5FF' 
  },
  tasksWrapper: { 
    paddingTop: 80, 
    paddingHorizontal: 25,
    paddingBottom: 150 
  },
  sectionTitle: { 
    fontSize: 28, 
    fontWeight: '800', 
    color: '#1A1A1A' 
  },
  items: { 
    marginTop: 30 
  },
  emptyContainer: { 
    alignItems: 'center', 
    marginTop: 100, 
    opacity: 0.5 
  },
  emptyEmoji: { 
    fontSize: 50, 
    marginBottom: 10 
  },
  emptyText: { 
    fontSize: 16, 
    color: '#666', 
    fontWeight: '500' 
  },
  writeTaskWrapper: { 
    position: 'absolute', 
    bottom: 30,
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  input: { 
    paddingVertical: 15, 
    paddingHorizontal: 25, 
    backgroundColor: '#FFF', 
    borderRadius: 20, 
    flex: 1,
    marginRight: 15,
    fontSize: 16,
    color: '#333',
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  addWrapper: { 
    width: 60, 
    height: 60, 
    backgroundColor: '#5856D6', 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 8,
  },
  addText: { 
    fontSize: 32, 
    color: '#FFF', 
    fontWeight: '300' 
  }
});