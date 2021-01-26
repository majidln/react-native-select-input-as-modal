import React from 'react';
import { Text, View } from 'react-native';
import type Item from './types/Item';

export interface Props {
  data: Array<Item>;
}

const Hello: React.FC<Props> = ({ data }: any) => {
  return (
    <View>
      {data.map(({ title, value }: any) => (
        <Text key={value}>{title}</Text>
      ))}
    </View>
  );
};

export default Hello;
