import React, { useState } from 'react'
import HomeScreenView from './HomeScreenView'
import { useNavigation } from '@react-navigation/native'
import { screenNames, screenNavigators } from '../../constants'

const LoginScreenContainer: React.FC = () => {
  const navigation = useNavigation()

  const goToDetails = (item) => {
    navigation.navigate(screenNames.DETAILS, { item });
  }

  const DATA = [{
    id: 0,
    title: 'some text from item 1',
    description: 'description text from item 1. Ggkhgyt tgjhn tv gbg c ygtyfte f ewserc iugh vrsxrtr b uv etdrf vtf ev kdsksonsyuhss gsuiksjiuws uhhsjolksmss'
  }, {
    id: 1,
    title: 'some text from item 2',
    description: 'description text item 2'
  }, {
    id: 2,
    title: 'some text from item 3',
    description: 'description text from item 3'
  }, {
    id: 3,
    title: 'some text from item 4',
    description: 'description text from item 4'
  }, {
    id: 4,
    title: 'some text from item 5',
    description: 'description text from item 5'
  }, {
    id: 5,
    title: 'some text from item 6',
    description: 'description text from item 6'
  }]

  const [data, setData] = useState(DATA);

  return (
    <HomeScreenView
      data={data}
      setData={setData}
      goToDetails={goToDetails}
    />
  )
}

export default LoginScreenContainer
