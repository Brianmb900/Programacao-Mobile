import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Dados( {route} ){
  const navigation = useNavigation();
  return(
    <View style={{marginTop: 45}}>
      <View style={styles.row}>
      <TouchableOpacity onPress={ () => navigation.goBack()}>
        <FontAwesome name='arrow-left' size={32}/>
      </TouchableOpacity>
        <Text style = {{fontSize: 27, color: 'blue', marginLeft: 45}}>Dados Informados:</Text>   
      </View>
      <Text style = {styles.texts}>Nome: {route.params?.nome}</Text>
      <Text style = {styles.texts}>Idade: {route.params?.idade}</Text>
      <Text style = {styles.texts}>Sexo: {route.params?.sexo}</Text>
      <Text style = {styles.texts}>Escolaridade: {route.params?.escolaridade}</Text>
      <Text style = {styles.texts}>Limite: {route.params?.limite}</Text>
      <Text style = {styles.texts}>Brasileiro: {route.params?.brasileiro == 1? <Text>Sim</Text> : <Text>Não</Text>}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  texts:{
    fontSize: 24,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 15
  }
});