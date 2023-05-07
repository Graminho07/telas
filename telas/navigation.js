import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => navigation.navigate('TelaSecundaria')}
      >
        <Text style={styles.texto}>Ir para a Tela Secundária</Text>
      </TouchableOpacity>
    </View>
  );
}

function TelaSecundaria() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Esta é a Tela Secundária</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaSecundaria" component={TelaSecundaria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacity: {
    width: 150,
    height: 100,
    borderRadius: 5,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  }
});