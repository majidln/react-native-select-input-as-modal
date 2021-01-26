import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ModalSelectInput } from 'react-native-select-input';

export default function App() {
  const data = [
    {
      value: '1',
      title: 'One',
    },
    {
      value: '2',
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
