import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Landing, Register} from './src/components';
import * as firebase from 'firebase';
import React from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyDOnHeFg6nZVD_mp_LaMzeDQHsi24O0hdE',
  authDomain: 'insta-af4d8.firebaseapp.com',
  projectId: 'insta-af4d8',
  storageBucket: 'insta-af4d8.appspot.com',
  messagingSenderId: '509776980292',
  appId: '1:509776980292:web:efe3d66571c68000cacf11',
  measurementId: 'G-NQZQPF89DS',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createNativeStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({});
