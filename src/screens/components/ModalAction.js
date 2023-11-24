import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { primaryColor, backgroundColor } from '../utils/colors';

export default function ModalAction({ visible, text, onActionPress, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
     <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{text}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={onActionPress}>
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: backgroundColor,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width:'90%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: primaryColor
  },
  closeButton: {
    backgroundColor: 'gray',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1, 
    marginRight: 10, 
  },
  actionButton: {
    backgroundColor: primaryColor,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1, 
    marginLeft: 10, 
  },
  buttonText: {
    color: backgroundColor,
    textAlign: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});
