// 1. Librerías importadas
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Alert,
} from 'react-native';
import { Card } from 'react-native-paper';

import { useState, useEffect } from 'react';

import ActionButton from './components/ActionButton';

// 2. El componente principal
export default function App() {
    // Aquí va el código de lógica (variables, funciones, estados)
    const [texto, setTexto] = useState('');
    const [tareas, setTareas] = useState([]);

    const agregar = () => {
        if (!texto.trim()) {
            Alert.alert('Error', 'No puedes agregar una tarea vacia');
            return;
        }

        setTareas([...tareas, { id: Date.now(), titulo: texto.trim() }]);

        setTexto('');
    };

    const eliminar = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };

    const mostrarAlerta = (id) => {
        Alert.alert(
            'Eliminar tarea',
            '¿Estas seguro que deseas eliminar esta tarea?',
            [{ text: 'Si', onPress: () => eliminar(id) }, { text: 'No' }]
        );
    };

    useEffect(() => console.log(`Tareas: [${JSON.stringify(tareas)}]`), [tareas]);

    return (
        <View style={styles.container}>
            {/* Código JSX (La estructura visual de la pantalla) */}
            <Text style={styles.titulo}>Lista de Tareas</Text>

            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    value={texto}
                    onChangeText={setTexto}
                    placeholder="Ingresa la tarea..."
                />
                <ActionButton titulo="Agregar" onPress={agregar} />
            </View>

            <ScrollView contentContainerStyle={styles.lista}>
                {tareas.length === 0 && (
                    <Text style={styles.vacio}>No hay tareas aun</Text>
                )}

                {tareas.map((tarea) => (
                    <Card key={tarea.id} style={styles.card}>
                        <View style={styles.cardRow} >
                            <Text style={styles.cardTexto}>{tarea?.titulo}</Text>
                            <ActionButton
                                titulo="Eliminar"
                                onPress={() => eliminar(tarea?.id)}
                                color="red"
                            />
                        </View>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
}

// 3. Estilos (Optimizados para el dispositivo móvil)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7',
        padding: 20,
        paddingTop: 50,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#4A4E69',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 15
    },

    lista: {
        paddingBottom: 20,
    },
    card: {
        marginBottom: 10,
        borderRadius: 12,
        backgroundColor: '#FFF',
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
    },
    cardTexto: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    vacio: {
        textAlign: 'center',
        color: '#999',
        fontSize: 15,
        marginTop: 40,
    },
});
