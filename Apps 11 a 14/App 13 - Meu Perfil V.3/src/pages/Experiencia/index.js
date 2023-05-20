import React, { useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function Experiencia(){

    return(
      <View>
      <Text style={{color: '#0166ff', fontSize: 25, marginLeft: 21, marginTop: 15}}>
          Experiência:
        </Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Auxiliar Administrativo</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Representante de Classe</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Monitor de Algoritmos e Lógica da Programação</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Estágio Voluntário no Centro de Infomática</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Desenvolvedor WEB Fullstack</Text>

      <Text style={{color: '#0166ff', fontSize: 25, marginLeft: 21, marginTop: 15}}>
          Projetos:
        </Text>
      <Text style={{color:'blue', fontSize: 17, marginLeft: 30}} onPress={() => Linking.openURL('https://github.com/Brianmb900')}>> Github</Text>
      </View>
    )
  }