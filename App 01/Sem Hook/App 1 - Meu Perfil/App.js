import React, { Component} from 'react';
import { View, Text, Image, Linking} from 'react-native';

class App extends Component{
  render(){

    let img = 'https://media.licdn.com/dms/image/D4E03AQGY9y4ON7lTng/profile-displayphoto-shrink_800_800/0/1664809130185?e=2147483647&v=beta&t=irp5QY2WCk51mE8BgTiX50NRDCGIOqpZhZb_TQapt4g';

    return(
      <View>
        
    <Image 
    source={{ uri: img }}
    style={{ width: 200, height: 200, marginLeft: 90, marginTop: 40}}
    />

    <Text style={{color: '#0166ff', fontSize: 25, marginLeft: 21, marginTop: 15}}>
          Dados Pesssoais:
        </Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Nome: Brian Melinski Bianchini</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Data de Nascimento: 06/08/2003</Text>

      <Text style={{color: '#0166ff', fontSize: 25, marginLeft: 21, marginTop: 15}}>
          Formação:
        </Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>&gt; Cursando 5º Semestre de ADS na Fatec-PG</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>&gt; Técnico em Administração - Colégio Alem</Text>

      <Text style={{color: '#0166ff', fontSize: 25, marginLeft: 21, marginTop: 15}}>
          Experiência:
        </Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Auxiliar Administrativo</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Representante de Classe</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Monitor de Algoritmos e Lógica da Programação</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Estágio Voluntário no Centro de Infomática</Text>
      <Text style={{fontSize: 17, marginLeft: 30}}>> Desenvolvedor WEB Fullstack</Text>

      <Text style={{color: '#0166ff', fontSize: 25, marginLeft: 21, marginTop: 15}}>
          Projetos:
        </Text>
      <Text style={{color:'blue', fontSize: 17, marginLeft: 30}} onPress={() => Linking.openURL('https://github.com/Brianmb900')}>> Github</Text>
      </View>
    )
  }
}

export default App;