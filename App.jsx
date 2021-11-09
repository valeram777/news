import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppPage} from './src/Screen/AllPage/AllPage'
import { Provider } from 'react-redux';
import store from './src/Store/Store'
export default function App() {
  
  return (
    <Provider store={store}>
    <AppPage />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//<View style={styles.container}>
//<Text>Open up App.js to start working on your app!!!!</Text>
//</appPage />
//<StatusBar style="auto" />
//</View>