import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ModalSelectInput from 'react-native-select-input-as-modal';
import Leg from './Components/Leg';
import type Country from './Types/Country';

export default function App() {
  const [visibleSelect, setVisibleSelect] = React.useState(false);
  const [selected, setSelected] = React.useState<any>({});
  const [visibleCountrySelect, setVisibleCountrySelect] = React.useState(false);
  const [country, setCountry] = React.useState<Country>(Object);
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
  const countries = [
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
  ];

  const renderCounties = () => {
    return (
      <View style={styles.countryWrapper}>
        <Leg
          placeholder="Select a Country"
          onPress={() => setVisibleCountrySelect(!visibleCountrySelect)}
          value={`${country.name ? country.name : ''}${
            country.code ? ' (' + country.code + ')' : ''
          }`}
        />
        <ModalSelectInput
          data={countries}
          isVisible={visibleCountrySelect}
          onClose={() => setVisibleCountrySelect(false)}
          label="Select a country"
          selected={country}
          onSelect={setCountry}
          itemText={'name'}
          itemValue="code"
          toolbarStyle={styles.countryToolbar}
          renderItem={(item: Country) => (
            <Text>{`${item.name} (${item.code})`}</Text>
          )}
          returnObject={true}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Leg
        placeholder="Select a option"
        onPress={() => setVisibleSelect(!visibleSelect)}
        value={selected?.value}
      />
      <ModalSelectInput
        data={data}
        isVisible={visibleSelect}
        onClose={() => setVisibleSelect(false)}
        label="Select Your data"
        selected={selected}
        onSelect={setSelected}
        returnObject={true}
      />
      {renderCounties()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  countryWrapper: {
    marginVertical: 20,
  },
  countryToolbar: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
