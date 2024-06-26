import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Pages/LoginPage'; 
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainInterface from './Pages/MainInterface';
const Stack = createStackNavigator();
 
export default function App(){
  return (
    <SafeAreaProvider >
         <NavigationContainer style={styles.container}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name= 'Login' component={LoginPage} options={{ headerShown: false }}/>
            <Stack.Screen name='MainInterface' component={MainInterface}  options={{ headerShown: false }} />
          </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
   
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
