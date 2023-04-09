import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, StyleSheet} from 'react-native';


export default function App(){

  const [resultado, setResultado] = useState(0)
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()

  function calc(){

    if (n1 != null || n2 != null){
      setResultado(n1 * n2);
    }else{
      alert('Inserir Ambos os Valores!')
      return
      }
  }

    return(
      <SafeAreaView style = {{marginTop: 45}}>

        <Text style = {{fontSize: 27, color:'orange', textAlign: 'center'}}>
          Multiplicador de Números
        </Text>

        <TextInput 
          style = {styles.input}
          placeholder="Digite o primeiro nº"
          keyboardType="numeric"
          onChangeText={(n) => setN1(n)}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o segundo nº"
          keyboardType="numeric"
          onChangeText={ (n) => setN2((n))}
        />

        <View style = {{padding: 30, paddingLeft: 70, paddingRight: 70}}>
          <Button Button color = 'blue' title="Calcular" onPress={calc}/>
        </View>

        <Text style = {{fontSize: 27, color:'green', textAlign: 'center'}}>
          Resultado: {resultado}
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