import React, {useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { View, Text, Button, Image ,FlatList, ActivityIndicator, StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
//import { Api } from '../Api/Api';
import { loadnews, changeIndex,totalres } from '../Reducer/SearchReducer';
import { ScrollView } from 'react-native-gesture-handler';
import {Card} from './card'
//import axios from 'axios';
import uuid from 'uuid'

export const Cards = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
   
    dispatch =useDispatch();
    let wordSe = useSelector((state)=>state.search.word);
    let pg = useSelector((state)=>state.search.page);
    let pgSize = useSelector((state)=>state.search.pageSize);
   // console.log(state) 
    const getMovies = async () => {
   
       try {

        const response = await fetch(`https://newsapi.org/v2/everything?q=${wordSe}&apiKey=482d083900f44dbc992e9d0195a02dca`);
        const json = await response.json();
        dispatch(totalres(json.totalResults))
        setData(json.articles);
        dispatch (loadnews(json.articles))
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getMovies();
    }, []);

 const press =(index)=>{
 
  dispatch(changeIndex(index))
   navigation.push('Cards')
  
 }
 
  let rr = data.map((item, index)=>{
    let img = {uri:item.urlToImage}
//onPress={()=>{press(index)}}
return <>
<TouchableOpacity  onPress={()=>{press(index)}}>

<Image style={styles.im} resizeMode="cover"  source={img} key={uuid()}/>
<Text style={styles.title} key={uuid()}>{item.title}</Text>
<Text style={styles.desc} key={uuid()}>{item.content}{"\n"}{"\n"}</Text>
</TouchableOpacity>
</>      
  })
    return (
      <View style={{ flex: 1, padding: 24 }}>
     {isLoading ? <Text>ЗАГРУЗКА......</Text>: (
       <ScrollView>{rr}</ScrollView>
     )}
      </View>
    );
}//<Text>ЗАГРУЗКА......</Text>
const styles = StyleSheet.create({
title:{
  color: 'blue',
fontSize:20
},
desc:{
  fontSize:16
},
im: {
  width:800,
  height:300
},
loading: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center'
}
})


 