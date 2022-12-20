import {Platform, LayoutAnimation} from 'react-native';

export default function configureTransition(onConfigured = () => {}) {
  const animation = LayoutAnimation.create(
    750,
    LayoutAnimation.Types.easeInEaseOut,
    LayoutAnimation.Properties.opacity,
  );
  const promise = new Promise(resolve => {
    //support android
    if (Platform.OS == 'android') {
      LayoutAnimation.configureNext(animation);
      // because android don't support callback function that help to make delay
      setTimeout(resolve, 750);
    } else {
      LayoutAnimation.configureNext(animation, resolve);
    }
  });
  // to change state after animation happend
  onConfigured();
  return promise;
}
