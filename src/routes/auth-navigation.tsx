import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RegistrationScreen from '../screens/Registration/RegistrationScreenContainer'
import LoginScreen from '../screens/Login/LoginScreenContainer'
import BottomTabNavigator from './bottom-tabs';
import { screenNames } from '../constants'

const Stack = createStackNavigator()

const AppContainer = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={screenNames.LOGIN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={screenNames.REGISTRATION}
          component={RegistrationScreen}
        />
        <Stack.Screen
          name={screenNames.TABS}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
