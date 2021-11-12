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
    const [pageStr, setPage] = useState(1);//Номер страницы
  const total = useSelector((state)=>state.search.totalResults)
   const left = '<<'
   const right = '>>'
    dispatch =useDispatch();
    let wordSe = useSelector((state)=>state.search.word);
    let pg = useSelector((state)=>state.search.page);
    let pgSize = useSelector((state)=>state.search.pageSize);//Кол-во новостей на странице
    const totalPage = Math.ceil(total/pgSize) //общее кол-во страниц
   // console.log(state) 
   console.log(useSelector((state)=>state.search.cards))
    const getMovies = async () => {
   
       try {

        const response = await fetch(`https://newsapi.org/v2/everything?q=${wordSe}&page=${pg}&pageSize=${pgSize}&apiKey=482d083900f44dbc992e9d0195a02dca`);
        const json = await response.json();
        dispatch(totalres(json.totalResults))
        setData(json.articles);
        dispatch (loadnews(json.articles));
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        
      }
    }

   // const PG = async() => {
   //  try {

     //   const response = await fetch(`https://newsapi.org/v2/everything?q=${wordSe}&page=${pageStr}&pageSize=${pgSize}&apiKey=482d083900f44dbc992e9d0195a02dca`);
     //   const json = await response.json();
      //  dispatch(totalres(json.totalResults))
      //  setData(json.articles);
      //  dispatch (loadnews(json.articles));
    //  } catch (error) {
     //   console.error(error);
    //  } finally {
    //    setLoading(false);
        
   //   }
  //  }
    useEffect(() => {
      getMovies();
    }, []);


    useEffect(() => {
      let isComponentMounted = true;
      const PG = async() => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${wordSe}&page=${pageStr}&pageSize=${pgSize}&apiKey=482d083900f44dbc992e9d0195a02dca`);
        const json = await response.json();
        if (isComponentMounted){
          dispatch(totalres(json.totalResults))
          setData(json.articles);
          dispatch (loadnews(json.articles));
        }
      }
      PG()
      return () => {
        isComponentMounted = false;}
    }, [pageStr]);

 const press =(index)=>{
 
  dispatch(changeIndex(index))
   navigation.push('Cards')
  
 }
 const onLeft = () =>{
   setPage(pageStr - 1)
   //dispatch (loadnews([]));
   //PG();
   
 }
 const onRight  = () =>{
   setPage(pageStr + 1)
   //dispatch (loadnews([]));
   //PG();
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
       <ScrollView>{rr}
       <View style={styles.pagin}>
       <TouchableOpacity style={styles.boxPagin} onPress={()=>{onLeft()}} key={uuid()}>
       <Text style={styles.txt} key={uuid()}>{left}</Text>
       </TouchableOpacity>
       <Text key={uuid()} style={styles.txt1}>{pageStr}{' из '}{totalPage}</Text>
       <TouchableOpacity style={styles.boxPagin}  onPress={()=>{onRight()}} key={uuid()}><Text style={styles.txt} >{right}</Text></TouchableOpacity>
       </View>
       </ScrollView>
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
},
pagin:{
flexDirection: 'row',
 //backgroundColor: 'grey',
justifyContent: 'center',
justifyContent: 'space-between',
},
txt:{
  fontSize:19,
  
 
},
boxPagin:{
 // textAlign: "center",
  
},
txt1:{
  //backgroundColor: 'green',
  fontSize:19,
 // alignItems: 'center',

}
})


 