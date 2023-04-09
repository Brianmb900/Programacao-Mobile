import React, { useState } from 'react';
import { View, Text, Image, Button, SafeAreaView, TextInput, StyleSheet} from 'react-native';


export default function App(){

  const [resultado, setResultado] = useState()
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()

  function calc(){

    res = n1 / n2;

    if (n1 != null || n2 != null){
      if (res < 0.7){
        setResultado('Alcool');
      }else{
        setResultado('Gasolina')
      } 
    }else{
      alert('Inserir Ambos os Valores!')
      return;
    }
  }
    return(
      <SafeAreaView style = {{marginTop: 45}}>

        <Text style = {{fontSize: 27, textAlign: 'center'}}>
          Alcool ou Gasolina
        </Text>

        <Image 
          source={{ uri: 'https://wp-midia-nova.bidu.com.br/uploads/2017/01/05175045/%C3%A1lcool.png' }}
          style={{ width: 384, height: 200, marginTop: 20, marginBottom: 20}}
        />

        <TextInput 
          style = {styles.input}
          placeholder="Preço do Alcool"
          keyboardType="numeric"
          onChangeText={ (n) => setN1(n)}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina"
          keyboardType="numeric"
          onChangeText={ (n) => setN2(n)}
        />

        <View style = {{padding: 30, paddingLeft: 70, paddingRight: 70}}>
          <Button Button color = 'green' title="Verificar" onPress={calc}/>
        </View>

        <Text style = {{fontSize: 27, color:'orange', textAlign: 'center'}}>
          O mais vantajoso é: {resultado}
        </Text>

    </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});