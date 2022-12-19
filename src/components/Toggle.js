import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';

const Toggle = ({options, value, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Size</Text>
      <View style={styles.buttons}>
        {options.map(item => (
          <Button value={item} onClick={onChange} />
        ))}
      </View>
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#56a5fb',
  },
  buttons: {},
});
