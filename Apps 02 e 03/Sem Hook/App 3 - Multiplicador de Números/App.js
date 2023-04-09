import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, StyleSheet} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: null,
      n1: '',
      n2: ''
    };

    this.calc = this.calc.bind(this);
    
  }

  calc(){

    if (this.state.n1 === '' || this.state.n2 === ''){
      alert('Inserir Ambos os Valores!')
      return;
    }

    this.setState({
      resultado: this.state.n1 * this.state.n2
    });
  }

  render(){
    return(
      <SafeAreaView style = {{marginTop: 45}}>

        <Text style = {{fontSize: 27, color:'orange', textAlign: 'center'}}>
          Multiplicador de Números
        </Text>

        <TextInput 
          style = {styles.input}
          placeholder="Digite o primeiro nº"
          keyboardType="numeric"
          onChangeText={ (n) => this.setState({n1: n})}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o segundo nº"
          keyboardType="numeric"
          onChangeText={ (n) => this.setState({n2: n})}
        />

        <View style = {{padding: 30, paddingLeft: 70, paddingRight: 70}}>
          <Button Button color = 'blue' title="Calcular" onPress={this.calc}/>
        </View>

        <Text style = {{fontSize: 27, color:'green', textAlign: 'center'}}>
          Resultado: {this.state.resultado}
        </Text>

    </SafeAreaView>
    )
  }
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

export default App;