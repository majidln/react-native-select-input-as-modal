import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import type Item from './types/Item';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentWrapper: {},
  list: {},
  item: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  itemLabel: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
  },
});

export interface Props {
  data: Array<Item>;
  isVisible: Boolean;
  onClose?: Function;
  backgroundColor?: String;
  label?: String;
  itemText?: String;
  itemValue?: String;
  returnObject?: Boolean;
  renderItem?: Function;
  selected?: Object;
  onSelect?: Function;
}

const ModalSelectInput: React.FC<Props> = ({
  data,
  isVisible,
  onClose,
  backgroundColor = '#fff',
  label,
  itemText = 'title',
  itemValue = 'value',
  returnObject = false,
  renderItem,
  onSelect = () => {},
}: any) => {
  const itemPress = (item: any) => {
    if (returnObject) {
      onSelect(item);
    } else {
      onSelect(item[itemValue]);
    }
    onClose();
  };

  const renderInnerItem = (item: any) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => itemPress(item)}>
        {renderItem ? (
          renderItem(item)
        ) : (
          <Text style={styles.itemLabel}>{item[itemText]}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Modal
        onSwipeComplete={() => onClose()}
        onBackdropPress={() => onClose()}
        onBackButtonPress={() => onClose()}
        style={styles.modal}
        isVisible={isVisible}
      >
        <View style={{ ...styles.contentWrapper, backgroundColor }}>
          {label && <Text style={styles.label}>{label}</Text>}
          <FlatList
            data={data}
            renderItem={({ item }) => renderInnerItem(item)}
            style={styles.list}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalSelectInput;
