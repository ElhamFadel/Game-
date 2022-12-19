import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React from 'react';

const CustomButton = ({value, onClick}) => {
  return (
    <TouchableOpacity style={styles.containerBTN}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerBTN: {
    backgroundColor: 'red',
    width: 80,
    height: 80,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
