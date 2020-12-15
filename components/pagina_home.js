import React,{ useState, useEffect, Component } from 'react';
import {
  Container,
  Header,
  Text,
  Right,
  Content,
  Item,
  Input,
  Icon,
  Title,
  Left,
  Button,
  Body,
  Footer,
  FooterTab,
  Font,
  Ionicons,
  Label,
} from 'native-base';
import { Audio } from 'expo-av';
import { Image, StyleSheet, View, ImageBackground, Alert, SafeAreaView } from 'react-native';
import * as Crypto from 'expo-crypto';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBs7jW4U35AWinvbeJlheup_v0Xd-QRApo',
  authDomain: 'vagapcd-6c120.firebaseapp.com',
  databaseURL: 'https://vagapcd-6c120.firebaseio.com/',
  projectId: 'vagapcd-6c120',
  storageBucket: 'vagapcd-6c120.appspot.com',
  messagingSenderId: '214082547809',
  appId: '1:214082547809:web:e17e12ac6a35fd154a7a20',
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('O app carregou');
}




export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayUsuario: [''],
      email: '',
      senha: '',
      cadastro_email: false,
      cadastro_senha: false,
      cpf: null
    };
    this.carregarDados();
  }

  carregarDados = () => {
    firebase
      .database()
      .ref('usuario')
      .once('value', (data) => {
        this.setState({ arrayUsuario: Object.values(data.toJSON()) });
        this.setState.cadastro_email = false;
        this.setState.cadastro_senha = false;
      });
  };

audio = async () => {
const soundObject = new Audio.Sound();
try {
  await soundObject.loadAsync(require('./../assets/sound.mp3'));
  await soundObject.playAsync();
  // Your sound is playing!

  // Don't forget to unload the sound from memory
  // when you are done using the Sound object
  await soundObject.unloadAsync();
} catch (error) {
  // An error occurred!
}
}


  logarUsuario = (email, senha) => {
    var users = this.state.arrayUsuario;
    var cpfusuario = null;
    var senha_true = false;
    var email_true = false;
    var nomeusuario = null;
    var senhausuario = null;
    users.forEach(function (element){
      console.log(element);
      if (element.email == email && element.senha == senha) {
        email_true = true;
        senha_true = true; 
        cpfusuario = element.cpf;
        nomeusuario = element.nome;
        senhausuario = element.senha;
      }
    });
    if (senha_true == true && email_true == true) {
      this.props.navigation.navigate('VAGA PCD', {cpf: cpfusuario, nome: nomeusuario, senha: senhausuario});
    } else {
      alert('Email ou senha inválido(a)');
    }
  };

  render(){
    return (
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <Header transparent style={{ marginTop: 20 }}>
          <Image
            style={{ width: 300, height: 200 }}
            source={require('./../assets/logo.png')}></Image>
        </Header>
        <View style={{ marginTop: 100 }}>
          <Item rounded style={{ marginLeft: 10, marginRight: 10 }}>
            <Label style={{ marginLeft: 7 }}>Email:</Label>
            <Input onChangeText={(email) => this.setState({ email: email }) & this.carregarDados()} />
          </Item>
          <Item
            rounded
            style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <Label style={{ marginLeft: 7 }}>Senha:</Label>
            <Input
              secureTextEntry={true}
              onChangeText={(senha) => this.setState({ senha : senha })}
            />
          </Item>
    
          <Button
          rounded
          success
            style={styles.botao_entrar}
            onPress={() =>{
              this.audio();
this.logarUsuario(this.state.email, this.state.senha)
            }
            }>
            <Text> Entrar </Text>
          </Button>        
          <Button
          rounded
            style={styles.botao_cadastro}
            onPress={() => {this.audio(); this.props.navigation.navigate('Cadastrar-se')}}>
            <Text> Cadastre-se </Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  botao_cadastro: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26abff',
    marginRight: 5,
    marginLeft: 5,
  },

  botao_entrar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
  },
});
