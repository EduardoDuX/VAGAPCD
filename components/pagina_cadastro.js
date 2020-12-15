import React,{ useState, useEffect, Component } from 'react';
import { Audio } from 'expo-av';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Input,
  Item,
  Button,
  Label,
  Picker,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, StyleSheet, Alert, SafeAreaView, View, ScrollView } from 'react-native';
import * as Crypto from 'expo-crypto';
import * as firebase from 'firebase';
import { FontAwesome5 } from '@expo/vector-icons';

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
  console.log('O app carregou'); }





export default class CardExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      email: null,
      nome: null,
      telefone: null,
      cpf: null,
      rg: null,
      senha: null,
      senha2: null,
      selected: null,
    };
  }


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

onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  salvar = (confirmacao) => {
    if (confirmacao == true) {
      let itemId = this.state.id;

      if (itemId != null) {
        let vetorCliente = [...this.state.arrayCliente];

        vetorCliente[itemId].nome = this.state.nome;
        vetorCliente[itemId].email = this.state.email;
        vetorCliente[itemId].cpf = this.state.cpf;
        vetorCliente[itemId].telefone = this.state.telefone;
        vetorCliente[itemId].rg = this.state.rg;
        vetorCliente[itemId].senha = this.state.senha;
        vetorCliente[itemId].pcd = this.state.selected;

        console.log(vetorCliente);
        this.setState({ arrayCliente: vetorCliente });
      } else {
        firebase
          .database()
          .ref('usuario')
          .push({
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone,
            cpf: this.state.cpf,
            rg: this.state.rg,
            senha: this.state.senha,
            pcd: this.state.selected,
          })
          .then(() => {
            console.log('Inserido!');
          })
          .catch((error) => {
            console.log(error);
          });

        // this.state.arrayCliente.push(objCliente);
        // console.log(objCliente);
      }
      this.clearData();
      this.forceUpdate();

      alert('Salvando...');
      this.props.navigation.navigate('VAGA PCD', {
        cpf: this.state.cpf,
        nome: this.state.nome,
        senha: this.state.senha,
      });
    } else {
      alert(
        'As senhas inseridas não são iguais ou nem todos os campos foram preenchidos, por favor tente novamente!'
      );
    }
  };

  confirmarSenha = (senha1, senha2) => {
    if (senha1 == senha2) {
      if (
        this.state.nome != null &&
        this.state.rg != null &&
        this.state.cpf != null &&
        this.state.telefone != null &&
        this.state.email != null &&
        this.state.selected != null
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  clearData = () => {
    this.setState({
      id: null,
      nome: null,
      cpf: null,
      telefone: null,
      rg: null,
      senha: null,
      email: null,
      pcd: null,
      selected: null,
    });
  };

  remover = (key) => {
    const vetorCliente = this.state.arrayCliente;

    vetorCliente.splice(key, 1);

    alert('removendo..' + key);
  };

  componenDidMount(){
    this.loadSounds();
  }

  render() {
    return (
      <ScrollView>
      <SafeAreaView style={styles.container1}>

            <View>
              <Item rounded style={styles.placeholder}>
                <Picker
                  mode="dropdown"
                  placeholder="Você é PcD ?"
                  iosIcon={ 
                    <FontAwesome5
                      color={'#434041'}
                      style={{ paddingRight: 16 }}
                      solid={true}
                      size={20}
                      name={'angle-double-down'}
                    />
                  }
                  textStyle={{ color: '#434041' }}
                  itemStyle={{
                    backgroundColor: '#e9e3ce',
                    borderWidth: 2,
                    borderColor: '#434041',
                    marginLeft: '2%',
                    marginTop: 10,
                    paddingLeft: 10,
                    width: '94%',
                    borderBottomWidth: 2,
                  }}
                  itemTextStyle={{ color: '#434041' }}
                  style={[styles.picker]}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Você é PcD?" value="nao respondeu" />
                  <Picker.Item label="Sim" value="sim" />
                  <Picker.Item label="Não" value="nao" />
                </Picker>
              </Item>

              <Item rounded style={styles.placeholder}>
                <Label style={{ marginLeft: 7 }}>Nome completo:</Label>
                <Input
                  value={this.state.nome}
                  onChangeText={(texto) => this.setState({ nome: texto })}
                  style={styles.placeholder_es}
                />
              </Item>

              <Item rounded style={styles.placeholder}>
                <Label style={{ marginLeft: 7 }}>Telefone:</Label>
                <Input
                  value={this.state.telefone}
                  onChangeText={(texto) => this.setState({ telefone: texto })}
                  style={styles.placeholder_es}
                />
              </Item>

              <Item rounded style={styles.placeholder}>
                <Label style={{ marginLeft: 7 }}>Email:</Label>
                <Input
                  value={this.state.email}
                  onChangeText={(texto) => this.setState({ email: texto })}
                  style={styles.placeholder_es}
                />
              </Item>

              <Item rounded style={styles.placeholder}>
                <Label style={{ marginLeft: 7 }}>CPF:</Label>
                <Input
                  value={this.state.cpf}
                  onChangeText={(texto) => this.setState({ cpf: texto })}
                  style={styles.placeholder_es}
                />
              </Item>

              <Item rounded style={styles.placeholder}>
                <Label style={{ marginLeft: 7 }}>RG:</Label>
                <Input
                  value={this.state.rg}
                  onChangeText={(texto) => this.setState({ rg: texto })}
                  style={styles.placeholder_es}
                />
              </Item>

              <Item rounded style={styles.placeholder}>
                <Label style={{ marginLeft: 7 }}>Senha:</Label>
                <Input
                  secureTextEntry={true}
                  value={this.state.senha}
                  onChangeText={(texto) => this.setState({ senha: texto })}
                  style={styles.placeholder_es}
                />
              </Item>

              <Item rounded style={styles.placeholder}>
                <Label style={{ marginLeft: 7 }}>Confirmar Senha:</Label>
                <Input
                  secureTextEntry={true}
                  style={styles.placeholder_es}
                  onChangeText={(texto) => this.setState({ senha2: texto })}
                />
              </Item>

              <Button
              rounded
              success
                style={styles.botao_cadastro}
                onPress={() =>{
                  this.audio();
this.salvar(
                    this.confirmarSenha(this.state.senha, this.state.senha2)
                  )
                }
                }>
                <Text>Cadastrar</Text>
              </Button>
            </View>

      </SafeAreaView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({

  container1: {
    backgroundColor: 'white',
  },

  botao_cadastro: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
  },

  placeholder: {
      marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderColor:'#434041',
  },

  placeholder_es: {
    marginLeft: 6,
  },

 picker:{
    width: 200, 
    marginLeft: 2 ,
  },
});
