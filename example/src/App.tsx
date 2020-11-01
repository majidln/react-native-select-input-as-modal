import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SelectInput, { ModalSelectInput } from 'react-native-select-input';

export default function App() {
  const data = [
    {
      id: 1,
      title: 'One',
    },
    {
      id: 2,
      title: 'Two',
    },
  ];

  return (
    <View style={styles.container}>
      <ModalSelectInput data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
