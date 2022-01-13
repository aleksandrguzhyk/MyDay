import React from 'react';
import AppContainer from './routes/auth-navigation'
import { StatusBar, UIManager } from 'react-native'
import { enableScreens } from 'react-native-screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { whiteColor } from './theme'
import { isAndroid } from './utils/common'

enableScreens()

if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App: React.FC = () => {
  // useGoogleConfig()
  return (
    // <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor={whiteColor} />
        <AppContainer />
      </SafeAreaProvider>
    // </Provider>
  )
}

export default App
