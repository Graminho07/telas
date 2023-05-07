import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Menu = ({ activeScreen, setActiveScreen }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, backgroundColor: '#f2f2f2', paddingHorizontal: 20, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setActiveScreen('A')}>
        <Ionicons name="home-outline" size={20} color={activeScreen === 'A' ? '#007bff' : '#333'} />
        <Text style={{ fontSize: 12, color: activeScreen === 'A' ? '#007bff' : '#333' }}>Tela A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setActiveScreen('B')}>
        <Ionicons name="search-outline" size={20} color={activeScreen === 'B' ? '#007bff' : '#333'} />
        <Text style={{ fontSize: 12, color: activeScreen === 'B' ? '#007bff' : '#333' }}>Tela B</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setActiveScreen('C')}>
        <Ionicons name="mail-outline" size={20} color={activeScreen === 'C' ? '#007bff' : '#333'} />
        <Text style={{ fontSize: 12, color: activeScreen === 'C' ? '#007bff' : '#333' }}>Tela C</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;