import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

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
  data: Array<object>;
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
  toolbarStyle?: Object;
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
  toolbarStyle,
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
        <View style={{ ...styles.contentWrapper }}>
          <View style={{ backgroundColor, ...toolbarStyle }}>
            {label && <Text style={styles.label}>{label}</Text>}
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => renderInnerItem(item)}
            style={{ backgroundColor, ...styles.list }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ModalSelectInput;
