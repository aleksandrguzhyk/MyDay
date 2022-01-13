import React, {useCallback} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text } from 'react-native'
import { BackgroundView } from '../../components'
import { screenNames, screenNavigators } from '../../constants'

const RegistrationScreen: React.FC = () => {
const navigation = useNavigation()
// const navigateToLogin = useCallback(
//   () => {
//     navigation.navigate('SignIn')
//   },
//   [navigation],
// )
  return (
    <BackgroundView>
      {/* <Pressable onPress={navigateToLogin}> */}
        <Text>Settings Screen</Text>
      {/* </Pressable> */}
    </BackgroundView>
  )
}

export default RegistrationScreen