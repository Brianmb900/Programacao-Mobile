import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';

export default function App(){
    return(
      <View style = {{marginTop: 45}}>
        <ScrollView>
          <Text style = {{fontSize: 27, textAlign: 'center', color: 'red'}}>
            Anúncios
          </Text>
          
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{borderWidth: 3, marginLeft: 20, marginRight: 20}}>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10, marginLeft: 10}}>
              <Image 
                source={{ uri: 'https://i.pinimg.com/originals/23/9c/05/239c05c5dcbf173b8642432fe8e460f1.jpg' }}
                style={{ width: 150, height: 200, marginTop: 20, marginBottom: 20}}
              />
              <Text>
                Rosquinha do Miranha{"\n"}
                por apenas R$ 10,99
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10, marginLeft: 10}}>
              <Image 
                source={{ uri: 'https://blogdoarmindo.com.br/wp-content/uploads/2021/09/dd5aa4457f428e907bb0e728e0563b28-450x300.jpg' }}
                style={{ width: 150, height: 200, marginTop: 20, marginBottom: 20, resizeMode: 'contain'}}
              />
              <Text>
                Inseticida do Miranha{"\n"}
                por apenas R$ 20,50
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10, marginLeft: 10}}>
              <Image 
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoRoSCWGGIhgMqaaZmTGvlgsY2gnmsKtl28xsIyB-m054iS85QgKNTepc6UXshfMgKWs&usqp=CAU' }}
                style={{ width: 150, height: 200, marginTop: 20, marginBottom: 20}}
              />
              <Text>
                Fantasia do Gary{"\n"}
                para seu cachorro{"\n"}
                por apenas R$ 53,90
              </Text>
            </View>
            <View style={{borderWidth: 3, marginTop: 10, marginBottom: 10, marginLeft: 10}}>
              <Image 
                source={{ uri: 'http://pm1.narvii.com/7669/788096ac14e5b76eb20204fc6308321ec638fe9ar1-514-752v2_uhq.jpg' }}
                style={{ width: 150, height: 200, marginTop: 20, marginBottom: 20}}
              />
              <Text>
                Fantasia do Mickey{"\n"}
                para seu cachorro{"\n"}
                por apenas R$ 100,00
              </Text>
            </View>
          </ScrollView>

          <Image 
            source={{ uri: 'https://i.pinimg.com/originals/f8/c8/04/f8c80410910a3893c9785e366dad9eda.png' }}
            style={{ width:270, height: 60, marginTop: 20, marginBottom: 20, marginLeft: 60}}
          />

          <Text style = {styles.texts}>
            Scroll  
          </Text>

      </ScrollView>
    </View>
    )
  }

const styles = StyleSheet.create({
  texts:{
    fontSize: 20,
    marginLeft: 10,
    color: "green",
    textAlign: "center",
  },
});