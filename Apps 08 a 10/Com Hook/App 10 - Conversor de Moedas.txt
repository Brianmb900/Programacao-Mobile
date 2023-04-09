import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App(){

      const [simbolo, setSimbolo] = useState(null)
      const [resultado, setResultado] = useState(null)
      const [valor, setValor] = useState(null)
      const [moeda1, setMoeda1] = useState(0)
      const [moeda2, setMoeda2] = useState(0)
      const moedas = [
        {id: 1, nome: 'Real'},
      {id: 2, nome: 'Dólar'},
      {id: 3, nome: 'Euro'},
      ]

  function converter(){
    if(moeda1 == 0 && moeda2 == 1){
      setSimbolo('$')
      setResultado(valor * 0.19)
    }else if(moeda1 == 1 && moeda2 == 0){
      setSimbolo('R$')
      setResultado(valor * 5.25)
    }else if(moeda1 == 0 && moeda2 == 2){
      setSimbolo('€')
      setResultado(valor * 0.18)
    }else if(moeda1 == 2 && moeda2 == 0){
      setSimbolo('R$')
      setResultado(valor * 5.66)
    }else if(moeda1 == 1 && moeda2 == 2){
      setSimbolo('€')
      setResultado(valor * 0.93)
    }else if(moeda1 == 2 && moeda2 == 1){
      setSimbolo('$')  
      setResultado(valor * 1.08);
    }else if(moeda1 == 0 && moeda2 == 0){
      setSimbolo('R$') 
      setResultado(valor);
    }else if(moeda1 == 1 && moeda2 == 1){
      setSimbolo('$')  
      setResultado(valor);
    }else{
      setSimbolo('€')  
      setResultado(valor);
    }
  }

    let tipoMoeda = moedas.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
    })

    return(
      <View style = {{marginTop: 45}}>
        <ScrollView>

          <Text style = {{fontSize: 27, textAlign: 'center', color: 'red'}}>
            Conversor de Moedas{"\n"}Dólar, Real e Euro
          </Text>
          
          <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          keyboardType="numeric"
          onChangeText={ (n) => setValor(n)}
        />

        <View style={styles.row}>
            <Text style = {styles.texts}>
              De:  
            </Text>

            <Picker
            style={{flex: 1}}
              selectedValue={moeda1+1}
              onValueChange={ (itemValue, itemIndex) => setMoeda1(itemIndex) }>
            {tipoMoeda}
            </Picker>           
          </View>

          <View style={styles.row}>
            <Text style = {styles.texts}>
              Para:  
            </Text>

            <Picker
            style={{flex: 1}}
              selectedValue={moeda2+1}
              onValueChange={ (itemValue, itemIndex) => setMoeda2(itemIndex) }>
            {tipoMoeda}
            </Picker>           
          </View>

          <View style = {{padding: 10, paddingLeft: 70, paddingRight: 70}}>
            <Button Button title="Converter" onPress={converter}/>
          </View>

          <Text style = {{textAlign: 'center', fontSize: 24, color: 'green'}}>
            Resultado:{"\n"}
            {simbolo} {resultado}
          </Text>

      </ScrollView>
    </View>
    )
  }

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20
  },
  texts:{
    fontSize: 24,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
});