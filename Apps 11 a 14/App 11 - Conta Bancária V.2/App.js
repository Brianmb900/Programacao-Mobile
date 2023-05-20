import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Banco from './src/pages/bank';
import Dados from './src/pages/data';


const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Banco"
        component={Banco}
        options={{
          headerShown: false,
        }}
        />
        
        <Stack.Screen
        name="Dados"
        component={Dados}
        options={{
          headerShown: false,
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
