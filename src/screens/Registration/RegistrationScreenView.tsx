import React from 'react'
import { View, Pressable, Text, TextInput } from 'react-native'
import { BackgroundView, Header } from '../../components'
import { placeholderGrey } from '../../theme'
import { styles } from './style'

interface IProps {
  state: Object
  dispatch: () => void
}

const RegistrationScreenView: React.FC<IProps> = ({
  state,
  dispatch,
}) => {
  console.log(state, 'state from RegistrationScreenView');
  const { username, password } = state
  return (
    <BackgroundView>
      <Header label={'Registration Screen'} />

      <View style={styles.loginContainer}>
        <TextInput
          autoCapitalize='none'
          autoCompleteType='email'
          autoCorrect={false}
          blurOnSubmit
          keyboardType='email-address'
          placeholder='email'
          placeholderTextColor={placeholderGrey}
          onChangeText={(text) => dispatch({ type: 'change_username', payload: text })}
          style={styles.input}
          value={username}
        />
        <TextInput
          autoCapitalize='none'
          autoCompleteType='password'
          autoCorrect={false}
          blurOnSubmit
          placeholder='password'
          placeholderTextColor={placeholderGrey}
          onChangeText={(text) => dispatch({ type: 'change_password', payload: text })}
          style={styles.input}
          value={password}
        />
      </View>
      <Pressable>
        <Text>Registration Screen</Text>
      </Pressable>
    </BackgroundView>
  )
}

export default RegistrationScreenView