import {
  StyleSheet,
  Animated,
  Text,
  View,
  TouchableOpacity,
  Button,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useRef, useEffect, useCallback} from 'react';

const getValue = (pressed, disabled) => {
  const base = disabled ? 0.5 : 1;
  const delta = disabled ? 0.1 : 0.3;

  return pressed ? base - delta : base;
};

const CustomButton = ({value, disabled, onClick}) => {
  const [pressed, setPressed] = useState(false);
  const animateButton = useRef(
    new Animated.Value(getValue(false, disabled)),
  ).current;
  //----

  const updateValue = useCallback(() => {
    Animated.timing(animateButton, {
      duration: 200,
      toValue: getValue(pressed, disabled),
      easing: Easing.out(Easing.quad),
    }).start();
  }, [pressed, disabled]);
  //wvwry time the component will update by props or state
  useEffect(() => {
    updateValue();
  }, [pressed, disabled]);

  useEffect(() => {
    updateValue();
  }, [pressed, disabled]);

  //handle
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={onClick}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={[styles.container]}>
        <Animated.Text style={[styles.title]}>{value}</Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F1E2A',
    borderWidth: 2,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 24,
  },
});
