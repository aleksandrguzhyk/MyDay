import React from 'react'
import { View, Pressable, TextInput, Text, Alert, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { BackgroundView } from '../../components'
import { styles } from './style'
import FastImage from 'react-native-fast-image'
import { imageAssets } from '../../assets'
import SvgIcon from '../../components/svg-icon'
import { placeholderGrey } from '../../theme'

interface IProps {
  goToHome: () => void
  goToRegistration: () => void
  // handleChange: () => void
  username: string
  setUsername: (username: string) => void
  password: string
  setPassword: (password: string) => void
}

const LoginScreenView: React.FC<IProps> = ({
  goToHome,
  goToRegistration,
  // handleChange,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  console.log(username, 'username from LoginScreenView');
  console.log(password, 'password from LoginScreenView');
  return (
    <BackgroundView style={styles.container}>
      <View style={styles.loginContainer}>
        <TextInput
          autoCapitalize='none'
          autoCompleteType='email'
          autoCorrect={false}
          blurOnSubmit
          keyboardType='email-address'
          placeholder='email'
          placeholderTextColor={placeholderGrey}
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          autoCapitalize='none'
          autoCompleteType='password'
          autoCorrect={false}
          blurOnSubmit
          placeholder='password'
          placeholderTextColor={placeholderGrey}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Pressable style={styles.bigButton} onPress={goToHome}>
        <Text style={styles.bigButtonText}>Login</Text>
      </Pressable>
      <View style={styles.socialButtonsContainer}>
        <Text style={styles.title}>Login with Social Network</Text>
        <View style={styles.socialButtonsWrapper}>
          <View style={styles.socialItem}>
            <SvgIcon
              Icon={imageAssets.facebook}
            // width={50}
            // height={50}
            // fill={whiteColor}
            />
            {/* <Text>FaceBook</Text> */}
          </View>
          <View style={styles.socialItem}>
            <SvgIcon
              Icon={imageAssets.google}
            // width={50}
            // height={50}
            // fill={whiteColor}
            />
            {/* <Text>Google</Text> */}
          </View>
        </View>
      </View>
      <Pressable style={styles.registrationContainer} onPress={goToRegistration}>
        <Text>Don't have an account? </Text>
        <Text style={styles.link}>SignUp</Text>
      </Pressable>
    </BackgroundView>
  )
}

export default LoginScreenView