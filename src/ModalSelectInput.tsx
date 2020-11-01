import React from 'react';
import { Text, View } from 'react-native';

export interface Props {
  data: Array;
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
