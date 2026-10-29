import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton({titulo, onPress, color}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.boton, { backgroundColor: color }]}>
      <Text style={styles.botonTexto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    boton: {
    backgroundColor: '#4A4E69',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
  },
  botonTexto: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -3,
  },
});
