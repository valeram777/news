import React, {useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { View, Text, Button, Image,StyleSheet,  ScrollView,Linking, TouchableOpacity   } from 'react-native';
import uuid from 'uuid'
export const Card = (index)=>{ 
let ins = useSelector((state)=>state.search.index)
let cc = useSelector((state)=>state.search.cards[ins])
let img = {uri:cc.urlToImage}
return (
    <ScrollView style={styles.boxContainer} key={uuid()} >
     <>
      <View key={uuid()} style={styles.post} >
      <Image style={styles.image} resizeMode="cover"  source={img} key={uuid()}/>
      <Text key={uuid()} >{cc.author}  </Text>
      <TouchableOpacity key={uuid()} onPress={()=> Linking.openURL(cc.url)} >
      <Text key={uuid()} style={styles.url}>{cc.url}</Text>
       </TouchableOpacity>
       <Text key={uuid()} style={styles.description}>{cc.description} </Text>
       <Text key={uuid()} >{(cc.publishedAt).slice(0,10)}</Text>
      </View>
    </>
    </ScrollView> 
)
}
const styles = StyleSheet.create({
boxContainer: {
    //flex: 1,
},

post: {
    marginBottom: 25,
    marginHorizontal:10,
  
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%'
  },
  description: {
    marginTop:20,
   fontSize:20
  },
  url:{
borderColor:2
  }
})
