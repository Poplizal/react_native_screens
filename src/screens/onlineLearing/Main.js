import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import CustomHeader
import CustomHeader from './CustomHeader';

//import Screens from onlineLearning
import Home from './Home';
import Details from './Details';

//import Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Main = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="details"
        component={Details}
        options={{
          tabBarIcon: ({size, color}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Main;
