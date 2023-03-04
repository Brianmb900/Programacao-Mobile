import React, { Component } from 'react';
import { View, Text, Button, Pressable} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoas: 0
    };

    this.maisP = this.maisP.bind(this);
    this.menosP = this.menosP.bind(this);
    /*this.maisPPlus = this.maisPPlus.bind(this);
    this.menosPPlus = this.menosPPlus.bind(this);
    this.timer = null;
    this.stopTimer = this.stopTimer.bind(this);*/
  }

  maisP(){
    this.setState({
      pessoas: this.state.pessoas + 1
    });
  }

  menosP(){
    this.setState({
      pessoas: this.state.pessoas - 1
    });
  }

  /*maisPPlus(){
    this.setState({
      pessoas: this.state.pessoas + 1
    });
    this.timer = setTimeout(this.maisPPlus, 50);
  }

  menosPPlus(){
    this.setState({
      pessoas: this.state.pessoas - 1
    });
    this.timer = setTimeout(this.menosPPlus, 50);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }*/

  render(){
    return(
      <View style={{ marginTop: 60}}>

        <Text style={{fontSize: 30, textAlign: 'center', color: 'orange'}}>
          Contador de Pessoas
        </Text>
        
        <View style = {{padding: 20, marginLeft: 80, marginRight: 80}}>
          <View style ={{justifyContent: 'space-between', borderWidth: 3}}>
            <Text style={{fontSize: 45, color: 'red', textAlign: 'center', marginTop:30, marginBottom: 30}}>
              {this.state.pessoas}
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Button color = 'green' title="+" onPress={this.maisP}/>
        </View>

        {this.state.pessoas == 0?
        <Text style={{fontSize: 30, color: 'blue', textAlign: 'center', marginTop:30, marginBottom: 30}}>O Número De Pessoas Não Pode Ser Menor Que Zero</Text>
        :<Button color = 'red' title="-" onPress={this.menosP}/>}
        
        {/*<Pressable onPressIn={this.menosPPlus} onPressOut={this.stopTimer}>
          <Text style={{fontSize: 25, color: 'red', textAlign: 'center', marginTop:30, marginBottom: 30}}>
            -
          </Text>
        </Pressable>

        <Pressable onPressIn={this.maisPPlus} onPressOut={this.stopTimer}>
          <Text style={{fontSize: 25, color: 'green', textAlign: 'center', marginTop:30, marginBottom: 30}}>
            +
          </Text>
        </Pressable>*/}

      </View>
    )
  }
}

export default App;