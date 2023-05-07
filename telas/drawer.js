import React from 'react';
import { View, Text, StyleSheet, FlatList, Swiper } from 'react-native';

const SCREENS = [
  { key: 'A', name: 'Tela A' },
  { key: 'B', name: 'Tela B' },
  { key: 'C', name: 'Tela C' },
];

const ScreenSlider = () => {
  return (
    <Swiper>
      {SCREENS.map(screen => (
        <View key={screen.key} style={styles.screen}>
          <Text style={styles.screenText}>{screen.name}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const ScreenMenu = ({ onSelect }) => {
  return (
    <FlatList
      data={SCREENS}
      horizontal
      renderItem={({ item }) => (
        <Text style={styles.menuItem} onPress={() => onSelect(item.key)}>
          {item.name}
        </Text>
      )}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.menuContainer}
    />
  );
};

const App = () => {
  const [selectedScreen, setSelectedScreen] = React.useState(SCREENS[0].key);

  return (
    <View style={styles.container}>
      <ScreenSlider />
      <ScreenMenu onSelect={setSelectedScreen} />
      <Text style={styles.selectedScreenText}>
        Tela selecionada: {selectedScreen}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  menuContainer: {
    paddingVertical: 10,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedScreenText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
