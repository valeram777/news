import * as React from 'react';
import { View, Text, Button, Image  } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {Card} from '../something/card'

export const Cards = () => {
//console.log(useSelector((state)=>state.search.word))
return (
<View>

<Card />
</View>
    )
}