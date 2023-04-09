import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      simbolo: null,
      resultado: null,
      valor: null,
      moeda1: 0,
      moeda2: 0,
      moedas: [
      {id: 1, nome: 'Real'},
      {id: 2, nome: 'Dólar'},
      {id: 3, nome: 'Euro'},
      ],
    };
    this.converter = this.converter.bind(this);
    
  }

  converter(){
    if(this.state.moeda1 == 0 && this.state.moeda2 == 1){
       this.setState({
         simbolo: '$',
        resultado: this.state.valor * 0.19
       });
    }else if(this.state.moeda1 == 1 && this.state.moeda2 == 0){
       this.setState({
         simbolo: 'R$',
        resultado: this.state.valor * 5.25
       });
    }else if(this.state.moeda1 == 0 && this.state.moeda2 == 2){
      this.setState({
        simbolo: '€',
        resultado: this.state.valor * 0.18
      });
    }else if(this.state.moeda1 == 2 && this.state.moeda2 == 0){
      this.setState({
        simbolo: 'R$',
        resultado: this.state.valor * 5.66
      });
    }else if(this.state.moeda1 == 1 && this.state.moeda2 == 2){
      this.setState({
        simbolo: '€',
        resultado: this.state.valor * 0.93
      });
    }else if(this.state.moeda1 == 2 && this.state.moeda2 == 1){
      this.setState({
        simbolo: '$',  
        resultado: this.state.valor * 1.08
      });
    }else if(this.state.moeda1 == 0 && this.state.moeda2 == 0){
      this.setState({
        simbolo: 'R$',  
        resultado: this.state.valor
      });
    }else if(this.state.moeda1 == 1 && this.state.moeda2 == 1){
      this.setState({
        simbolo: '$',  
        resultado: this.state.valor
      });
    }else{
      this.setState({
        simbolo: '€',  
        resultado: this.state.valor
      });
    }
  }

  render(){

    let tipoMoeda = this.state.moedas.map( (valor, chave) => {
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
          onChangeText={ (n) => this.setState({valor: n})}
        />

        <View style={styles.row}>
            <Text style = {styles.texts}>
              De:  
            </Text>

            <Picker
            style={{flex: 1}}
              selectedValue={this.state.moeda1+1}
              onValueChange={ (itemValue, itemIndex) => this.setState({moeda1: itemIndex}) }>
            {tipoMoeda}
            </Picker>           
          </View>

          <View style={styles.row}>
            <Text style = {styles.texts}>
              Para:  
            </Text>

            <Picker
            style={{flex: 1}}
              selectedValue={this.state.moeda2+1}
              onValueChange={ (itemValue, itemIndex) => this.setState({moeda2: itemIndex}) }>
            {tipoMoeda}
            </Picker>           
          </View>

          <View style = {{padding: 10, paddingLeft: 70, paddingRight: 70}}>
            <Button Button title="Converter" onPress={this.converter}/>
          </View>

          <Text style = {{textAlign: 'center', fontSize: 24, color: 'green'}}>
            Resultado:{"\n"}
            {this.state.simbolo} {this.state.resultado}
          </Text>

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

export default App;