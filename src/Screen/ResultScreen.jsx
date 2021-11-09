import * as React from 'react';
import { View, Text, Button, Image  } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {Cards} from '../something/cards'

export const ResultScreen =({navigation}) => {
  const w = useSelector((state)=>state.search.word)
  //console.log({navigation})
 

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Результат поиска</Text>
          <Cards navigation={navigation}/>
     
      
  </View>

  )
  
}