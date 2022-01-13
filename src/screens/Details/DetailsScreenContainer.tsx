import React from 'react'
import DetailsScreenView from './DetailsScreenView'
import { useNavigation, useRoute } from '@react-navigation/native'

const DetailsScreenContainer: React.FC = () => {
  const navigation = useNavigation()
  const { params } = useRoute()
  const item = params?.item
  console.log(params, 'params')
  console.log(item, 'item')

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <DetailsScreenView item={item} goBack={goBack} />
  )
}

export default DetailsScreenContainer

