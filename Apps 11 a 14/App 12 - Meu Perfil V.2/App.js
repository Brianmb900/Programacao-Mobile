import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
import Home from './src/pages/Pessoal';
import Sobre from './src/pages/Formacao';
import Contato from './src/pages/Experiencia';
 
const Tab = createMaterialTopTabNavigator();
 
export default function App(){
  return(
      <NavigationContainer>
        <Tab.Navigator style={{marginTop: 30}}>
          <Tab.Screen name='Pessoal' component={Home} />
          <Tab.Screen name='Formação' component={Sobre} />
          <Tab.Screen name='Experiência' component={Contato} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}
