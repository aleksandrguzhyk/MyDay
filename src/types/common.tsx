import { FC } from 'react'
import {
  Animated,
  FlatList,
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  PressableProps,
  ScrollView,
  StyleProp,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
  ViewToken,
} from 'react-native'
import { SvgProps } from 'react-native-svg'
// import { IntroMessageData } from '../common'
// import { IStyle, PressEvent } from './types'

export type ImageAssets = {
  [key in string]: any
}

export namespace Props {
  export interface IAvatarProps {
    avatarSource: ImageSourcePropType
    containerStyle?: StyleProp<ViewStyle>
    imageStyles?: {
      width?: number
      height?: number
      borderRadius?: number
    }
  }
  export interface IBackgroundViewProps {
    style?: StyleProp<ViewStyle>
  }
  export interface IStatusButton {
    status: string
  }
  export interface ISuccessChangeProps {
    icon: FC<SvgProps>
    textBody: string
    textTitle: string
    buttonLabel: string
  }
  export interface ILinkProps {
    type?: string
    label?: string
    onPress?: TouchableOpacityProps['onPress']
    containerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
  }
  export interface ITouchableOpacityHitSlopedProps
    extends ILinkProps,
    TouchableOpacityProps { }
  export interface IBulletProps {
    index: number
    scrollX: Animated.Value
  }
  export interface ILogoProps extends IStyle<ViewStyle, ViewStyle> {
    Icon: FC<SvgProps>
    text?: string
    textStyle?: StyleProp<TextStyle>
  }
  export interface IIntroCarouselProps {
    containerStyle: StyleProp<ViewStyle>
    flatListRef: React.RefObject<FlatList<IntroMessageData>>
    scrollX: Animated.Value
    onViewableItemsChanged:
    | ((info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => void)
    | null
    | undefined
  }
  export interface IInfoBodyProps {
    info: {
      logo: FC<SvgProps>
      title: string
      body: string
    }
    containerStyle?: StyleProp<ViewStyle>
  }
  export interface IIconButtonProps extends IStyle<ViewStyle, ViewStyle> {
    Icon: FC<SvgProps>
    disabled?: boolean
    iWidth?: number
    iHeight?: number
    textStyle?: StyleProp<TextStyle>
    iconContainerStyle?: StyleProp<ViewStyle>
    onPress?: (event?: GestureResponderEvent) => void
    facebookOnPress?: (error: any, result: any) => void
    text?: string
    styles?: StyleProp<ViewStyle>
    iStyle?: StyleProp<ImageStyle>
  }
  export interface IStatusVariantProps {
    answerInfo: any
    pollId: string
  }
  export interface ISendOptionStatusProps {
    status: string
    title: string
  }
  export interface IButtonProps extends Omit<PressableProps, 'children'> {
    containerStyle?: StyleProp<ViewStyle>
    buttonStyle?: StyleProp<ViewStyle>
    titleStyle?: StyleProp<TextStyle>
    title?: string
    loading?: boolean
  }
  export interface ISocialLogin {
    socialName: string
    style?: StyleProp<ViewStyle>
  }
  export interface ISocialSignInProps {
    containerStyle?: StyleProp<ViewStyle>
    buttonStyle?: ViewStyle
  }
  export interface IKeyBoardAvoidingScrollViewProps {
    containerStyle?: StyleProp<ViewStyle>
    contentContainerStyle?: StyleProp<ViewStyle>
    iosOffset?: number
    androidOffset?: number
  }
  export interface IControlledTextInput extends TextInputProps {
    onChange?: any
    value?: string
    stylesInput?: StyleProp<ViewStyle>
    stylesRoot?: StyleProp<ViewStyle>
    placeholder?: string
  }
  export interface ISliderButtonsProps {
    containerStyle: StyleProp<ViewStyle>
    sliderOptions: {
      currentPage: number
      nextPage: PressEvent
      previousPage: PressEvent
    }
    scrollX: Animated.Value
  }
  export interface ISocialFooterProps {
    containerStyle?: StyleProp<ViewStyle>
    additionalText?: string
    additionalTextLink?: string
    footerText?: string
    buttonOptions?: {
      title?: string
      onPress?: PressEvent
    }
  }
}
