/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions, Text} from 'react-native';
//import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import screens from surSignup
// import Welcome from './src/screens/surfSignUp/Welcome';
// import SignUp from './src/screens/surfSignUp/SignUp';
// import Login from './src/screens/surfSignUp/Login';

// import screens from beach
// import Welcome from './src/screens/beach/Welcome';
// import Home from './src/screens/beach/Home';
// import Details from './src/screens/beach/Details';

//import Screens from onlineLearning
import Welcome from './src/screens/onlineLearing/Welcome';
import Home from './src/screens/onlineLearing/Home';
import Details from './src/screens/onlineLearing/Details';
import CustomHeader from './src/screens/onlineLearing/CustomHeader';
import Main from './src/screens/onlineLearing/Main';

// import react navigators
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './src/screens/surfSignUp/Header';

// create navigator for surfSignup
const NativeStack = createNativeStackNavigator();

// const BottomTab = createBottomTabNavigator();

//Dimensions
const dev_width = Dimensions.get('window').width;
const dev_height = Dimensions.get('window').height;
const App = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator screenOptions={{headerShown: false}}>
        <NativeStack.Screen name="welcome" component={Welcome} />
        <NativeStack.Screen name="main" component={Main} />
        <NativeStack.Screen
          name="details"
          component={Details}
          options={{
            headerShown: true,
            header: () => {
              return <CustomHeader />;
            },
          }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dev_width,
    height: dev_height,
  },
  header: {
    backgroundColor: 'blue',
  },
});

export default App;
