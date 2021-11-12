import  React, {useState, useEffect }from 'react';
import { View, Text, Button, Image,TextInput, StyleSheet, TouchableOpacity  } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {Api} from '../Api/Api'
import SelectDropdown from 'react-native-select-dropdown'
import {ws, changeLang} from '../Reducer/SearchReducer'

export const MainScreen =({navigation}) => {
  MainScreen.navigationOptions={
    headerTitle:'Новостной поиск'
  }

const onSelect2 = (selectedItem, index) => {
 // console.log(selectedItem, index)// https://reactnativeexample.com/a-highly-customized-dropdown-select-picker-menu-for-react-native/
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
    <TouchableOpacity onPress={About}><Text>О программе</Text></TouchableOpacity>
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
    //shadowOffset: { width: 0, height: 1},
   // shadowOpacity: 0.20,
   // shadowRadius: 0.5,
   // elevation: 2
  },
  button: {
    padding: 20
    
  },
  Sel: {
    borderWidth: 2,
    borderColor: "#00BFFF",
    width:80,
    borderRadius:20
  }
});
//const countries = ["RU", "ENG"]
//<View>
//<SelectDropdown data={countries} 
//onSelect={onSelect2} style={styles.Sel}
// defaultButtonText={'Выбор языка'}
//defaultValue={"ENG"}

//buttonStyle={styles.Sel}
///>

 //</View>