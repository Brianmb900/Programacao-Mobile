import React, { useState } from 'react';
import { View, Text, Button, Pressable} from 'react-native';


export default function App(){
  const [pessoas, setPessoas] = useState(0)

  function maisP() {
    setPessoas((pessoas+1))
  }

  function menosP() {
    setPessoas((pessoas-1))
  }
    return(
      <View style={{ marginTop: 60}}>

        <Text style={{fontSize: 30, textAlign: 'center', color: 'orange'}}>
          Contador de Pessoas
        </Text>
        
        <View style = {{padding: 20, marginLeft: 80, marginRight: 80}}>
          <View style ={{justifyContent: 'space-between', borderWidth: 3}}>
            <Text style={{fontSize: 45, color: 'red', textAlign: 'center', marginTop:30, marginBottom: 30}}>
              {pessoas}
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Button color = 'green' title="+" onPress={maisP}/>
        </View>

        {pessoas == 0?
        <Text style={{fontSize: 30, color: 'blue', textAlign: 'center', marginTop:30, marginBottom: 30}}>O Número De Pessoas Não Pode Ser Menor Que Zero</Text>
        :<Button color = 'red' title="-" onPress={menosP}/>}

      </View>
    )
}