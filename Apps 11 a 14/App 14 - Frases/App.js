import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Switch} from 'react-native';

export default function App(){

  const [dia, setDia] = useState(true)
  const [pequeno, setPequeno] = useState(true)

  useEffect(() => {
    getData();
    //alert('Abriu o App');
  }, []);

useEffect(() => {
    setData();
  }, [dia, pequeno]);

  async function setData() {
    await AsyncStorage.setItem('dia', String(dia));
    await AsyncStorage.setItem('pequeno', String(pequeno));
  }

  async function getData() {
    const dia = await AsyncStorage.getItem('dia');
    const pequeno = await AsyncStorage.getItem('pequeno');

    setDia(dia === 'true' && true);
    setPequeno(pequeno === 'true' && true);
  }

    return(
        <ScrollView style = {{marginTop: 45}}>
          <Text style = {{fontSize: 27, textAlign: 'center',borderBottomWidth: 3}}>
            Frases
          </Text>

        <View style={styles.row}>
          <Text style = {{fontSize: 24, marginLeft: 10,}}>
            Dia:  
          </Text>
          <Switch style = {{marginLeft: 10}}
            value={dia}
            onValueChange={ (valorSwitch) => setDia(valorSwitch)}
          />
          <Text style = {{fontSize: 24, marginLeft: 100,}}>
            Pequeno:  
          </Text>
          <Switch style = {{marginLeft: 10}}
            value={pequeno}
            onValueChange={ (valorSwitch) => setPequeno(valorSwitch)}
          />
        </View>

        <View style={{borderWidth:3, backgroundColor: dia?'white':'black'}}>
          <Text style = {{fontSize: pequeno?12:24, marginLeft: 10, color: dia?'black':'white'}}>
            "A vingança nunca é plena, mata a alma e envenena." (Seu Madruga)  
          </Text>
        </View>

      </ScrollView>
    )
  }

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});