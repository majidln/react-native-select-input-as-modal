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

## List of props
|Name   | Type  |Default   |Desc   |
| ------------ | ------------ | ------------ |
| data  | Array   |Require| Array of objects   |
| isVisible  | Boolean |Require  | To show select modal modal   |
|onClose   | Function  | null|Trigger when modal closed by user gesture    |
| backgroundColor  | String   | #fff   | background color of modal
|label   | String    |     | Label of opened modal
|itemText   | String   | title   | The key of data items to user
| itemValue  | String    | value    | The value of select box when user select an item
|returnObject   | Boolean    | false    | To return whole object when user select it
| renderItem  | Function  |    | A function that render select item from the parent
|selected|Object||Selected value of modal
|onSelect|Function|| When user select an item this callback triggered, it's return whole object when returnObject is true else it's return object[itemValue]


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
