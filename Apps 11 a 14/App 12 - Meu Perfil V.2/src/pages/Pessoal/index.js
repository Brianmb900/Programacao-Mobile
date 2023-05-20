import React, { useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function Pessoa(){

 let img = 'https://media.licdn.com/dms/image/D4E03AQGY9y4ON7lTng/profile-displayphoto-shrink_800_800/0/1664809130185?e=2147483647&v=beta&t=irp5QY2WCk51mE8BgTiX50NRDCGIOqpZhZb_TQapt4g';

    return(
      <View>
        
    <Image 
    source={{ uri: img }}
    style={{ width: 200, height: 200, marginLeft: 90, marginTop: 40}}
    />

    <Text style={{color: '#0166ff', fontSize: 25, marginLeft: 21, marginTop: 15}}>
          Dados Pesssoais:
        </Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Nome: Brian Melinski Bianchini</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Data de Nascimento: 06/08/2003</Text>
      </View>
    )
  }