import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const styles = StyleSheet.create({

  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30, 
    marginTop: 50,
  },
  black:{
    justifyContent:'center',
    flex:1,
  },
  formulario:{
    alignContent:'center',
    flex:1,
    marginTop: 50,
    marginRight: 7,
    marginBottom: 2,
    marginLeft: 7,
    fontSize: 22,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#2B7C89',
    flex: 1
  }
  });

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',senha: ''};
  }
  render() {
    return (
      <View style={styles.container}>

      {/* titulo */} 
      <View id="titulo">
      <Text style={styles.titulo}>VAGA PCD</Text>
      </View>

      {/* inputs */}
      <View id="form" style={styles.formulario}> 
      <TextInput 
          placeholder="E-mail"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
      />
       <TextInput 
          placeholder="Senha"
          onChangeText={(senha) => this.setState({senha})}
          value={this.state.senha}
      />
      </View>

      </View>
    );
  }
}