import  React, {useState}from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity  } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {ws, changeLang} from '../Reducer/SearchReducer'

export const MainScreen =({navigation}) => {
  MainScreen.navigationOptions={
    headerTitle:'Новостной поиск'
  }

const onSelect2 = (selectedItem, index) => {
  dispatch(changeLang(index))
}


    const [valueText, SetValue] = useState('') 
    const dispatch = useDispatch()
    const goToPage =() =>{  
      dispatch(ws(valueText))
        navigation.push('ResultScreen')
        SetValue("")
    }  
    const About = () => {
      navigation.push('AboutScreen')

    }
    return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <TextInput  
        value = {valueText}
        style={styles.input}
       onChangeText={(value)=>SetValue(value)}
        />
       
    <Button
    style={styles.button}
      title="Поиск"
      onPress={goToPage}
    />
    <TouchableOpacity onPress={About} style={styles.prog}><Text>О программе</Text></TouchableOpacity>
  </View>)
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 300,
    margin: 5,
    borderWidth: 2,
    borderRadius:10,
    width: '90%',
    padding: 10,
    borderColor: "#00BFFF",
    fontSize: 19,
  },
  button: {
    padding: 20
    
  },
  Sel: {
    borderWidth: 2,
    borderColor: "#00BFFF",
    width:80,
    borderRadius:20
  },
  prog:{
    marginTop:'30%'
  }
});