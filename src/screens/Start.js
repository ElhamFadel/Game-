import {
  StyleSheet,
  Text,
  View,
  UIManager,
  LayoutAnimation,
  Button,
  Image,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Toggle} from '../components';
import {configureTransition, sleep} from '../utils';

//enable layout animation
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const State = {
  //statr screen
  Launching: 'Launching',
  // fade in ui
  WillTransitionIn: 'WillTransitionIn',
  // to transition to game screen
  WillTransitionOut: 'WillTransitionOut',
};

const BOARD_SIZES = [3, 4, 5, 6];

const Start = ({
  size,
  onChangeSize,
  title,
  onPress,
  color,
  height,
  borderRadius,
  fontSize,
}) => {
  const [transitionState, setStateTransition] = useState(State.Launching);

  const animate = useRef(new Animated.Value(0)).current;
  const handleAnimation = async () => {
    await sleep(500);
    configureTransition(() => setStateTransition(State.WillTransitionIn));
  };

  useEffect(() => {
    handleAnimation();
    Animated.timing(animate, {
      toValue: 1,
      duration: 500,
      delay: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(animate, {
      toValue: 1,
      duration: 500,
      delay: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeInStyle = {opacity: animate};

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/logo.png')} />
      </View>
      {transitionState !== State.Launching && (
        <Animated.View style={[fadeInStyle, styles.btns]}>
          <Toggle options={BOARD_SIZES} value={size} onChange={onChangeSize} />
        </Animated.View>
      )}
      {transitionState !== State.Launching && (
        <Animated.View style={fadeInStyle}>
          <Button title={`Start Game`} onPress={() => {}} />
        </Animated.View>
      )}
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#292938',
    minHeight: '100%',
  },
  logo: {
    alignSelf: 'stretch',
    paddingHorizontal: 40,
  },
  btns: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

Start.prototype = {
  onChangeSize: PropTypes.func.isRequired,
  onStartGame: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};
