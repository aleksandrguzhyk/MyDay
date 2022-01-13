import React, { useState } from 'react'
import LoginScreenView from './LoginScreenView'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../../constants'

const LoginScreenContainer: React.FC = () => {
  const navigation = useNavigation()

  const goToHome = () => {
    navigation.navigate(screenNames.TABS, { screen: screenNames.MY_DAY });
  }

  const goToRegistration = () => {
    navigation.navigate(screenNames.REGISTRATION);
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // const debounce = (func, delay) => {
  //   let timeOutId

  //   return (...args) => {
  //     if (timeOutId) clearTimeout(timeOutId)
  //     timeOutId = setTimeout(() => {
  //       func.aply(null, args)
  //     }, delay)
  //   }
  // }

  // const handleChange = ({ nativeEvent }) => {
  //   console.log(nativeEvent, 'nativeEvent from handleChange');
  //   const { text } = nativeEvent
  //   setUserName(text)
  //   debounceLogin(userName)
  // }

  // const handleLogin = () => {
  //   // apiCall with value
  // }

  // const debounceLogin = debounce(handleLogin, 500)

  return (
    <LoginScreenView
      goToHome={goToHome}
      goToRegistration={goToRegistration}
      // handleChange={handleChange}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  )
}

export default LoginScreenContainer
