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

    res = this.state.n1 / (this.state.n2 * this.state.n2);

    if (this.state.n1 === '' || this.state.n2 === ''){
      alert('Inserir Ambos os Valores!')
      return;
    }

    if (res < 18.5){
      this.setState({
        resultado: 'Abaixo do Peso'
      });
    }else if (res >= 18.5 && res <= 24.9){
      this.setState({
        resultado: 'Peso ideal (Parabéns)'
      })
    }else if (res >= 25 && res <= 29.9){
      this.setState({
        resultado: 'Levemente acima do peso'
      })
    }else if (res >= 30 && res <= 34.9){
      this.setState({
        resultado: 'Obesidade grau 1'
      })
    }else if (res >= 35 && res <= 39.9){
      this.setState({
        resultado: 'Obesidade grau 2'
      })
    }else{
      this.setState({
        resultado: 'Obesidade grau 3'
      })
    }

  }

  render(){
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
          onChangeText={ (n) => this.setState({n1: n})}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura"
          keyboardType="numeric"
          onChangeText={ (n) => this.setState({n2: n})}
        />

        <View style = {{padding: 30, paddingLeft: 70, paddingRight: 70}}>
          <Button Button color = 'green' title="Verificar" onPress={this.calc}/>
        </View>

        <Text style = {{fontSize: 26, color:'orange', textAlign: 'center'}}>
          Classificação: {this.state.resultado}
        </Text>

    </SafeAreaView>
    )
  }
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

export default App;