import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, StyleSheet, Image} from 'react-native';


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

    res = this.state.n1 / this.state.n2;

    if (this.state.n1 === '' || this.state.n2 === ''){
      alert('Inserir Ambos os Valores!')
      return;
    }

    if (res < 0.7){
      this.setState({
      resultado: 'Alcool'
      });
    }else{
      this.setState({
      resultado: 'Gasolina'
      })
    }

  }

  render(){
    return(
      <SafeAreaView style = {{marginTop: 45}}>

        <Text style = {{fontSize: 27, textAlign: 'center'}}>
          Alcool ou Gasolina
        </Text>

        <Image 
          source={{ uri: 'http://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg' }}
          style={{ width: 384, height: 200, marginTop: 20, marginBottom: 20}}
        />

        <TextInput 
          style = {styles.input}
          placeholder="Preço do Alcool"
          keyboardType="numeric"
          onChangeText={ (n) => this.setState({n1: n})}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina"
          keyboardType="numeric"
          onChangeText={ (n) => this.setState({n2: n})}
        />

        <View style = {{padding: 30, paddingLeft: 70, paddingRight: 70}}>
          <Button Button color = 'green' title="Verificar" onPress={this.calc}/>
        </View>

        <Text style = {{fontSize: 27, color:'orange', textAlign: 'center'}}>
          O mais vantajoso é: {this.state.resultado}
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