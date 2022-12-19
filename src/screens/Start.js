import {
  StyleSheet,
  Text,
  View,
  UIManager,
  LayoutAnimation,
  Button,
  Image,
} from 'react-native';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Toggle} from '../components';
import {sleep} from '../utils';

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

const Start = ({size, onChangeSize}) => {
  const [transitionState, setStateTransition] = useState(State.Launching);

  const handleAnimation = async () => {
    await sleep(500);
    const animation = LayoutAnimation.create(
      750,
      LayoutAnimation.Types.easeInEaseOut,
      LayoutAnimation.Properties.opacity,
    );
    LayoutAnimation.configureNext(animation);
    setStateTransition(State.WillTransitionIn);
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/logo.png')} />
      </View>
      {transitionState !== State.Launching && (
        <View>
          <Toggle options={BOARD_SIZES} value={size} onChange={onChangeSize} />
        </View>
      )}
      {transitionState !== State.Launching && (
        <View>
          <Button title={`Start Game`} onPress={() => {}} />
        </View>
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
});

Start.prototype = {
  onChangeSize: PropTypes.func.isRequired,
  onStartGame: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};
