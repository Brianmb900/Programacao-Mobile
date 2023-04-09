import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput, StyleSheet, Switch} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      status: false,
      limite: 0,
      escolaridade: 0,
      escolaridades: [
      {id: 1, nome: ' Sem estudo'},
      {id: 2, nome: 'Ensino Fudamental Incompleto'},
      {id: 3, nome: 'Ensino Fudamental 1'},
      {id: 4, nome: 'Ensino Fudamental 2'},
      {id: 5, nome: 'Ensino Médio'},
      {id: 6, nome: 'Ensino Superior'},
      ],
      sexo: 0,
      sexos: [
        {id: 1, nome: 'Macho'},
        {id: 2, nome: 'Fêmea'},
      ],
      idade:0,
      nome:0,
      exibi:0
    };

    this.exibir = this.exibir.bind(this);
    
  }

  exibir(){
    this.setState({exibi: 1})
  }

  render(){
    let tipoEscolaride = this.state.escolaridades.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
    })

    let tipoSexo = this.state.sexos.map( (valor, chave) => {
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
              onChangeText={ (name) => this.setState({nome: name})}
            />
          </View>

          <View style={styles.row}>
            <Text style = {styles.texts}>
              Idade:  
            </Text>
            <TextInput 
              style = {styles.input}
              placeholder="Idade"
              onChangeText={ (age) => this.setState({idade: age})}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <Text style = {styles.texts}>
              Sexo:  
            </Text>

            <Picker
            style={{flex: 1}}
              selectedValue={this.state.sexo+1}
              onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemIndex}) }>
            {tipoSexo}
            </Picker>           
          </View>
          
          <View style={styles.row}>
            <Text style = {styles.texts}>
              Escolaridade:  
            </Text>

            <Picker
            style={{flex: 1}}
              selectedValue={this.state.escolaridade+1}
              onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemIndex}) }>
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
              onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado})}
              value={this.state.limite}
              step={1}
            />
          </View>

          <Text style={{textAlign: 'center', fontSize: 30}}>
            {this.state.limite.toFixed(2)}
          </Text>

        <View style={styles.row}>
          <Text style = {styles.texts}>
            Brasileiro:  
          </Text>
          <Switch style = {{marginLeft: 10}}
            value={this.state.status}
            onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
          />
        </View>

        <View style = {{padding: 10, paddingLeft: 70, paddingRight: 70}}>
          <Button Button title="Confrimar" onPress={this.exibir}/>
        </View> 

        {this.state.exibi == 1?
        <React.Fragment>
          <Text style = {styles.texts}>Nome: {this.state.nome}</Text>
          <Text style = {styles.texts}>Idade: {this.state.idade}</Text>
          <Text style = {styles.texts}>Sexo: {this.state.sexos[this.state.sexo].nome}</Text>
          <Text style = {styles.texts}>Escolaridade: {this.state.escolaridades[this.state.escolaridade].nome}</Text>
          <Text style = {styles.texts}>Limite: {this.state.limite}</Text>
          <Text style = {styles.texts}>Brasileiro: {this.state.status == 1? <Text>Sim</Text> : <Text>Não</Text>}</Text>
        </React.Fragment>
        : null}

      </ScrollView>
    </View>
    )
  }
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

export default App;