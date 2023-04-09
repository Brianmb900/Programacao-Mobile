import React, { useState } from 'react';
import { View, Text, Image, Button, SafeAreaView, TextInput, StyleSheet} from 'react-native';


export default function App(){

  const [resultado, setResultado] = useState()

  function calc(){
    setResultado(Math.floor(Math.random() * 11))
  }
    return(
      <SafeAreaView style = {{marginTop: 45}}>

        <Text style = {{fontSize: 27, textAlign: 'center'}}>
          Jogo do Nº Aleatório
        </Text>

        <Image 
          source={{ uri: 'https://www.stoodi.com.br/wp-content/uploads/2022/06/como-usar-interrogacao.jpg' }}
          style={{ width: 384, height: 257, marginTop: 20, marginBottom: 20}}
        />

        <Text style = {{fontSize: 24, textAlign: 'center', color: 'red'}}>
          Pense em um número de 0 a 10
        </Text>

        <Text style = {{fontSize: 24, textAlign: 'center', color: 'red'}}>
          {resultado}
        </Text>

        <Text style = {{fontSize: 24, textAlign: 'center', color: 'red'}}>
          ----------------------
        </Text>

        <View style = {{padding: 10, paddingLeft: 70, paddingRight: 70}}>
          <Button Button color = 'green' title="Descobrir" onPress={calc}/>
        </View>       

    </SafeAreaView>
    )
  }