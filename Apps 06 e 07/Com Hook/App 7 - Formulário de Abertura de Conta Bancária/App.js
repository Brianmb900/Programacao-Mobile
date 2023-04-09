import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, StyleSheet, Switch} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

export default function App(){

  const [status, setStatus] = useState(false)
  const [limite, setLimite] = useState(0)
  const [escolaridade, setEscolaridade] = useState(0)
  const escolaridades = [
      {id: 1, nome: 'Sem estudo'},
      {id: 2, nome: 'Ensino Fudamental Incompleto'},
      {id: 3, nome: 'Ensino Fudamental 1'},
      {id: 4, nome: 'Ensino Fudamental 2'},
      {id: 5, nome: 'Ensino Médio'},
      {id: 6, nome: 'Ensino Superior'},
    ]
  const [sexo, setSexo] = useState(0)
  const sexos = [
      {id: 1, nome: 'Masculino'},
      {id: 2, nome: 'Feminino'},
  ]
  const [idade, setIdade] = useState(0)
  const [nome, setNome] = useState(0)
  const [exibi, setExibi] = useState(0)

  function exibir(){
    setExibi(1)
  }
    let tipoEscolaride = escolaridades.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
    })

    let tipoSexo = sexos.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
    })

    return(
      <View style = {{marginTop: 45}}>
        <ScrollView>
          <Text style = {{fontSize: 27, textAlign: 'center', color: 'red'}}>
            Abertura de Conta
          </Text>
          
          <View style={styles.row}>
            <Text style = {styles.texts}>
              Nome:  
            </Text>
            <TextInput 
              style = {styles.input}
              placeholder="Nome"
              onChangeText={ (name) => setNome(name)}
            />
          </View>

          <View style={styles.row}>
            <Text style = {styles.texts}>
              Idade:  
            </Text>
            <TextInput 
              style = {styles.input}
              placeholder="Idade"
              onChangeText={ (age) => setIdade(age)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <Text style = {styles.texts}>
              Sexo:  
            </Text>

            <Picker
            style={{flex: 1}}
              selectedValue={sexo+1}
              onValueChange={ (itemValue, itemIndex) => setSexo(itemIndex) }>
            {tipoSexo}
            </Picker>           
          </View>
          
          <View style={styles.row}>
            <Text style = {styles.texts}>
              Escolaridade:  
            </Text>

            <Picker
            style={{flex: 1}}
              selectedValue={escolaridade+1}
              onValueChange={ (itemValue, itemIndex) => setEscolaridade(itemIndex) }>
            {tipoEscolaride}
            </Picker>           
          </View>

          <View style={styles.row}>
            <Text style = {styles.texts}>
              Limite:  
            </Text>
            <Slider style = {{flex: 1}}
              minimumValue={0}
              maximumValue={10000}
              onValueChange={ (valorSelecionado) => setLimite(valorSelecionado)}
              value={limite}
              step={1}
            />
          </View>

          <Text style={{textAlign: 'center', fontSize: 30}}>
            {limite.toFixed(2)}
          </Text>

        <View style={styles.row}>
          <Text style = {styles.texts}>
            Brasileiro:  
          </Text>
          <Switch style = {{marginLeft: 10}}
            value={status}
            onValueChange={ (valorSwitch) => setStatus(valorSwitch)}
          />
        </View>

        <View style = {{padding: 10, paddingLeft: 70, paddingRight: 70}}>
          <Button Button title="Confrimar" onPress={exibir}/>
        </View> 

        {exibi == 1?
        <React.Fragment>
          <Text style = {styles.texts}>Nome: {nome}</Text>
          <Text style = {styles.texts}>Idade: {idade}</Text>
          <Text style = {styles.texts}>Sexo: {sexos[sexo].nome}</Text>
          <Text style = {styles.texts}>Escolaridade: {escolaridades[escolaridade].nome}</Text>
          <Text style = {styles.texts}>Limite: {limite}</Text>
          <Text style = {styles.texts}>Brasileiro: {status == 1? <Text>Sim</Text> : <Text>Não</Text>}</Text>
        </React.Fragment>
        : null}

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
    fontSize: 20,
  },

  row: {
    flexDirection: 'row',
  },

  texts:{
    fontSize: 24,
    marginLeft: 10,
  },
});