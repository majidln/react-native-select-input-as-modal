import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface Props {
  placeholder?: String;
  value?: String;
}

export default function Leg({ placeholder = '', value = '', ...rest }) {
  const renderContent = () => {
    if (value) {
      return value;
    }
    return placeholder;
  };
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text>{renderContent()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#c3c3c3',
    borderRadius: 12,
    padding: 8,
  },
});
