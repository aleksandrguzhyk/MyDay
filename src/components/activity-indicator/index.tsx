import React from 'react'
import { ActivityIndicator as RNActivityIndicator, View } from 'react-native'
import { secondaryColor } from '../../theme'
import { styles } from './styles'

const ActivityIndicator: React.FC = () => {
  return (
    <View style={styles.spinner}>
      <RNActivityIndicator animating color={secondaryColor} size="small" />
    </View>
  )
}

export default ActivityIndicator
