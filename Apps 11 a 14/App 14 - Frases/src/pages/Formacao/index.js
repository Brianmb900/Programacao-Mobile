import React, { useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function Formacao(){

    return(
      <View>
      <Text style={{color: '#0166ff', fontSize: 25, marginLeft: 21, marginTop: 15}}>
          Formação:
        </Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>&gt; Cursando 5º Semestre de ADS na Fatec-PG</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>&gt; Técnico em Administração - Colégio Alem</Text>
      </View>
    )
  }