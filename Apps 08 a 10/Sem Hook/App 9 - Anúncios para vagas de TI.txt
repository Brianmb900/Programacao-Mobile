import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';

class App extends Component{

  render(){
    return(
      <View style = {{marginTop: 45}}>
        <ScrollView>
          <Text style = {{fontSize: 27, textAlign: 'center', color: 'red'}}>
            Vagas
          </Text>
          
          <ScrollView style={{marginLeft: 20, marginRight: 20}}>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Backend Júnior
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 3500,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o backend{"\n"}
                de aplicações Java
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 3435-3637
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Frontend Júnior
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 2000,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o frontend{"\n"}
                das aplicações web
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 3435-3637
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Backend Pleno
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 6800,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o backend{"\n"}
                de aplicações Java
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 4415-3637
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Frontend Pleno
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 4500,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o frontend{"\n"}
                das aplicações web
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 4415-3637
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Backend Senior
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 12000,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o backend{"\n"}
                de aplicações Java
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 7070-7070
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Frontend Senior
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 7500,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o frontend{"\n"}
                das aplicações web
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 7070-7070
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Fullstack Júnior
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 4000,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o backend{"\n"}
                e frontend de aplicações Java Web
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 3435-3637
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Fullstack Pleno
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 8000,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o backend{"\n"}
                e frontend de aplicações Java Web
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 4415-3637
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10}}>
              <Text style={styles.titulos}>
                Desenvolvedor Fullstack Senior
              </Text>
              <Text style={styles.texts}>
                Salário: R$ 15000,00
              </Text>
              <Text style={styles.texts}>
                Descrição: Desenvolver o backend{"\n"}
                e frontend de aplicações Java Web
              </Text>
              <Text style={styles.texts}>
                Contato: (13) 7070-7070
              </Text>
            </View>
          </ScrollView>

      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  texts:{
    fontSize: 18,
  },
  titulos:{
    color: 'blue',
    fontSize: 22,
  },
});

export default App;