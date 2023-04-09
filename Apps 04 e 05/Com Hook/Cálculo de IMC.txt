import React, { useState } from 'react';
import { View, Text, Image, Button, SafeAreaView, TextInput, StyleSheet} from 'react-native';


export default function App(){

  const [resultado, setResultado] = useState()
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()

  function calc(){

    res = n1 / (n2*n2);

    if (n1 != null || n2 != null){
      if (res < 18.5){
      setResultado('Abaixo do Peso');
    }else if (res >= 18.5 && res <= 24.9){
      setResultado('Peso ideal (Parabéns)')
    }else if (res >= 25 && res <= 29.9){
      setResultado('Levemente acima do peso')
    }else if (res >= 30 && res <= 34.9){
      setResultado('Obesidade grau 1')
    }else if (res >= 35 && res <= 39.9){
      setResultado('Obesidade grau 2')
    }else{
      setResultado('Obesidade grau 3')
    }
  }else{
      alert('Inserir Ambos os Valores!')
      return;
    }
  }
    
    return(
      <SafeAreaView style = {{marginTop: 45}}>

        <Text style = {{fontSize: 27, textAlign: 'center'}}>
          Cálculo do IMC
        </Text>

        <Image 
          source={{ uri: 'https://emagreceja.com.br/wp-content/uploads/2023/03/tabela-imc.png' }}
          style={{ width: 384, height: 257, marginTop: 20, marginBottom: 20}}
        />

        <TextInput 
          style = {styles.input}
          placeholder="Peso"
          keyboardType="numeric"
          onChangeText={ (n) => setN1(n)}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura"
          keyboardType="numeric"
          onChangeText={ (n) => setN2(n)}
        />

        <View style = {{padding: 30, paddingLeft: 70, paddingRight: 70}}>
          <Button Button color = 'green' title="Verificar" onPress={calc}/>
        </View>

        <Text style = {{fontSize: 26, color:'orange', textAlign: 'center'}}>
          Classificação: {resultado}
        </Text>

    </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});