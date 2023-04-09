import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, StyleSheet, Image} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: null,
    };

    this.calc = this.calc.bind(this);
    
  }

  calc(){
      this.setState({
        resultado: Math.floor(Math.random() * 11)
      })

  }

  render(){
    return(
      <SafeAreaView style = {{marginTop: 45}}>

        <Text style = {{fontSize: 27, textAlign: 'center'}}>
          Jogo do Nº Aleatório
        </Text>

        <Image 
          source={{ uri: 'https://www.stoodi.com.br/wp-content/uploads/2022/06/como-usar-interrogacao.jpg' }}
          style={{ width: 384, height: 257, marginTop: 20, marginBottom: 20}}
        />

        <Text style = {{fontSize: 24, textAlign: 'center', color: 'red'}}>
          Pense em um número de 0 a 10
        </Text>

        <Text style = {{fontSize: 24, textAlign: 'center', color: 'red'}}>
          {this.state.resultado}
        </Text>

        <Text style = {{fontSize: 24, textAlign: 'center', color: 'red'}}>
          ----------------------
        </Text>

        <View style = {{padding: 10, paddingLeft: 70, paddingRight: 70}}>
          <Button Button color = 'green' title="Descobrir" onPress={this.calc}/>
        </View>       

    </SafeAreaView>
    )
  }
}

export default App;