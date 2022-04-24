/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  StatusBar,
} from 'react-native';
//import icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import screens from surSignup
// import Welcome from './src/screens/surfSignUp/Welcome';
// import SignUp from './src/screens/surfSignUp/SignUp';
// import Login from './src/screens/surfSignUp/Login';
// import Header from './src/screens/surfSignUp/Header';

// import screens from beach
import Welcome from './src/screens/beach/Welcome';
import Home from './src/screens/beach/Home';
import Details from './src/screens/beach/Details';
import Search from './src/screens/groceryShop/Search';
import Cart from './src/screens/groceryShop/Cart';
import Checkout from './src/screens/groceryShop/Checkout';
import Profile from './src/screens/groceryShop/Profile';
import Notifications from './src/screens/groceryShop/Notifications';
import OrderDetails from './src/screens/groceryShop/OrderDetails';

// import Screens from onlineLearning
// import Welcome from './src/screens/onlineLearing/Welcome';
// import Home from './src/screens/onlineLearing/Home';
// import Details from './src/screens/onlineLearing/Details';
// import CustomHeader from './src/screens/onlineLearing/CustomHeader';
// import Main from './src/screens/onlineLearing/Main';

// import Screens from foodDelivery
// import Welcome from './src/screens/foodDelivery/Welcome';

// import Screens from groceryShop
// import Welcome from './src/screens/groceryShop/Welcome';
// import Home from './src/screens/groceryShop/Home';
// import Details from './src/screens/groceryShop/Details';

// import react navigators
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// create navigator for surfSignup
const NativeStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

//Dimensions
const dev_width = Dimensions.get('window').width;
const dev_height = Dimensions.get('window').height;

//testing
import Test from './testing/Test';

const App = () => {
  return <OrderDetails />;
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
