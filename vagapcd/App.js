import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const styles = StyleSheet.create({

  bigBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems:'center',
    flex:1,
    justifyContent:'center',
    
  },
  black:{
    color:'black',
  },
  });

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.bigBlack}>
      <Text>VAGA PCD:{this.state.text}  </Text>
        
      <TextInput
          placeholder="E-mail"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
      />
      </View>
    )
  }
}





