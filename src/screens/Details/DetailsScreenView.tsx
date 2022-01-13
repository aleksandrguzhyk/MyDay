import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './style'
import { BackgroundView } from '../../components'
import { Header } from '../../components/header'

interface IProps {
  item: object
  goBack: () => void
}

const DetailsScreenView: React.FC<IProps> = ({ item, goBack }) => {
  return (
    <>
      <Header label={'DetailsScreenView'} />
      <BackgroundView style={styles.container}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Pressable onPress={goBack}>
          <Text>Go Back to previous screen</Text>
        </Pressable>
      </BackgroundView>
    </>
  )
}

export default DetailsScreenView

