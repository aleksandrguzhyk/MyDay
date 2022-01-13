import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from './main-stack-navigator';
import SettingsScreen from '../screens/Settings';
import { screenNames } from '../constants'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screenNames.MY_DAY} component={MainStackNavigator} />
      <Tab.Screen name={screenNames.USER_SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
