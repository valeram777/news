import * as React from 'react';
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
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Поиск новостей' }} /> 
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ title: 'О программе' }}/>
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: 'Результат поиска' }}/>
        <Stack.Screen name="Cards" component={Cards} options={{ title: 'Подробная информация' }}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
  
}
