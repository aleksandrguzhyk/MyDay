import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Props } from '../../types'
import { styles } from './styles'

const BackgroundView: React.FC<Props.IBackgroundViewProps> = ({
  children,
  style,
}) => <SafeAreaView style={[styles.root, style]}>{children}</SafeAreaView>

export default BackgroundView
