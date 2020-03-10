import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class login extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>VAGA PCD</Text>
        <form method="post" action="">
          <label for="email">E-mail</label>
            <input type="text" id="email"/>
          <label for="senha">Senha</label>
            <input type="password" id="senha"/>
            <input type="submit" id="entrar"/>
        </form>
        
      </View>
    );
  }
}
