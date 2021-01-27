import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ModalSelectInput } from 'react-native-select-input';

export default function App() {
  const [visibleSelect, setVisibleSelect] = React.useState(false);
  const [selected, setSelected] = React.useState();
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
      <TouchableOpacity onPress={() => setVisibleSelect(!visibleSelect)}>
        <Text>Select data</Text>
      </TouchableOpacity>
      {selected && <Text>{JSON.stringify(selected)}</Text>}
      <ModalSelectInput
        data={data}
        isVisible={visibleSelect}
        onClose={() => setVisibleSelect(false)}
        label="Select Your data"
        selected={selected}
        onSelect={setSelected}
        returnObject={true}
      />
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
