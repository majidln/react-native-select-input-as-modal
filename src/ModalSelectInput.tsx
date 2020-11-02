import React from 'react';
import { Text, View } from 'react-native';
import type Section from './types/Section';

export interface Props {
  sections: Array<Section>;
}

const Hello: React.FC<Props> = ({ data }) => {
  return (
    <View>
      {data.map(({ title }) => (
        <Text>{title}</Text>
      ))}
    </View>
  );
};

export default Hello;
