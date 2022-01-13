import React from 'react'
import { View, Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { Props } from '../../types'
import { imageAssets } from '../../assets'
import { SvgIcon } from '../../components'
import { whiteColor } from '../../theme'

export const Header: React.FC<Props.ILinkProps> = ({
  label,
  onPress,
  type,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.leftArrow}>
        <SvgIcon
          Icon={imageAssets.arrow}
          width={20}
          height={20}
          fill={whiteColor}
        />
      </Pressable>
      <View style={styles.centered}>
        <Text>{label}</Text>
      </View>
    </View>
  )
}

