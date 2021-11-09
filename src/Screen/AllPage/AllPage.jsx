import * as React from 'react';
import { View, Text, Button, Image }from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen} from '../MainScreen'
import {AboutScreen} from '../AboutScreen'
import {ResultScreen} from '../ResultScreen'
import {Cards} from '../Cards'


const Stack = createNativeStackNavigator();

export const AppPage = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen" >
        <Stack.Screen name="MainScreen" component={MainScreen}  /> 
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
  
}
