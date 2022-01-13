import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreenContainer';
import DetailScreen from '../screens/Details/DetailsScreenContainer';
import { screenNames } from '../constants'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={screenNames.MY_DAY} component={HomeScreen} />
      <Stack.Screen name={screenNames.DETAILS} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
