import * as React from 'react';
import { View, Text } from 'react-native';
import { useSelector} from 'react-redux'
import {Cards} from '../something/cards'

export const ResultScreen =({navigation}) => {
  const w = useSelector((state)=>state.search.word)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Результат поиска</Text>
          <Cards navigation={navigation}/>
  </View>

  )
  
}