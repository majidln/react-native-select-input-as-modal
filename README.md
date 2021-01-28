# react-native-select-input

React Native Select Input

## Installation

```sh
npm install react-native-select-input
```

```sh
yarn add react-native-select-input
```

## Usage

```js
import ModalSelectInput from 'react-native-select-input';

// ...
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
// ...

<ModalSelectInput
    data={data}
    isVisible={visibleSelect}
    onClose={() => {/* close modal */}}
    label="Select Your data"
    selected={selected}
    onSelect={setSelected}
    returnObject={true}
/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
