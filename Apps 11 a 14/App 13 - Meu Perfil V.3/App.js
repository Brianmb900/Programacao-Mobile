import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
 
import Home from './src/pages/Pessoal';
import Sobre from './src/pages/Formacao';
import Contato from './src/pages/Experiencia';
 
const Tab = createBottomTabNavigator();
 
const icons = {
  Pessoal:{
    name: 'home',
  },
  Formação:{
    name: 'people',
  },
  Experiência:{
    name: 'call',
  }
}


export default function App(){
  return(
      <NavigationContainer>
        <Tab.Navigator style={{marginTop: 30}}screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }>
          <Tab.Screen name='Pessoal' component={Home} />
          <Tab.Screen name='Formação' component={Sobre} />
          <Tab.Screen name='Experiência' component={Contato} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}
