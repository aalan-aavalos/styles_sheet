import { StyleSheet, Text, View, TextInput } from 'react-native';

import ActionButton from './components/ActionButton';

import { useState } from 'react';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregar = () => {
    if(!titulo.trim()) return

    setTareas([...tareas, {id: Date.now(), titulo: titulo}])    
  }


  return (
    <View>
      <Text>Lista de Tareas</Text>

      <View>
        <TextInput placeholder="Ingresa la tarea..." value={titulo} />

        <ActionButton titulo="Agregar" />
      </View>
    </View>
  );
}
