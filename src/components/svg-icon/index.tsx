import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

interface IProps {
  Icon: React.FC<SvgProps>
  width?: number
  height?: number
  style?: StyleProp<ViewStyle>
  fill?: string
}

const SvgIcon: React.FC<IProps> = ({ Icon, width, height, style, fill }) => {
  return <Icon width={width} height={height} style={style} fill={fill} />
}

export default SvgIcon
