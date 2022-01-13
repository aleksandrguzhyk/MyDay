import React, { useReducer } from 'react'
import RegistrationScreenView from './RegistrationScreenView'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../../constants'

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_username':
      return { ...state, username: state.username + action.payload }
      break;

    case 'change_password':
      return state.password.length + action.payload < 8
        ? state
        : { ...state, password: state.password + action.payload }
      break;

    default:
      break;
  }
}

const RegistrationScreenContainer: React.FC = () => {
  const navigation = useNavigation()

  const goToHome = () => {
    navigation.navigate(screenNames.TABS, { screen: screenNames.MY_DAY });
  }

  const goBack = () => {
    navigation.navigate(screenNames.LOGIN);
  }

  const [state, dispatch] = useReducer(reducer, { username: '', password: '' })

  return (
    <RegistrationScreenView
      state={state}
      dispatch={dispatch}
    />
  )
}

export default RegistrationScreenContainer;