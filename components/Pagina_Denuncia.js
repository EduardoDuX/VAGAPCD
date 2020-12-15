import React,{ useState, useEffect, Component } from 'react';
import {View, TouchableOpacity, StyleSheet, Alert, Image,TouchableHighlight, SafeAreaView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text, Container, Header, Content, Card, CardItem, Body, Input, Item, Button, Thumbnail, Icon, Label } from 'native-base';
import * as firebase from 'firebase';
import * as Crypto from 'expo-crypto';
import { Audio } from 'expo-av';
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

const Sound = () => {
 const [soundObj, setSoundObj] = useState(new Audio.Sound);
}

export default class Denuncia extends Component {

 constructor(props) {
    super(props);
    this.state = {
      id_denuncia: null,
      descricao: null,
      p_referencia: null,
      placa_carro: null,
      fk_id_usuario: null,
      fk_numero_vaga: null,
      fk_foto: null,
      nomeusuario: null,
      senha: null,
    };
  }
   makeid = (length) => {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


  salvar = (teste) => {
    teste = true;
    if(teste == true){
    let itemId = this.state.id_denuncia;

    if (itemId != null) {
      let vetorCliente = [...this.state.arrayCliente];

      vetorCliente[itemId].fk_foto = this.state.fk_foto;
      vetorCliente[itemId].descricao = this.state.descricao;
      vetorCliente[itemId].p_referencia = this.state.p_referencia;
      vetorCliente[itemId].placa_carro = this.state.placa_carro;
      vetorCliente[itemId].fk_id_usuario = this.state.fk_id_usuario;
      vetorCliente[itemId].fk_numero_vaga = this.state.fk_numero_vaga;
      vetorCliente[itemId].nomeusuario = this.state.nomeusuario;
      console.log(vetorCliente);
      this.setState({ arrayCliente: vetorCliente });
    } else {
      firebase
        .database()
        .ref('denuncia')
        .push({
          nomeusuario : this.state.nomeusuario,
          fk_foto : this.state.fk_foto,
          descricao: this.state.descricao,
          p_referencia: this.state.p_referencia,
          placa_carro: this.state.placa_carro,
          fk_id_usuario: this.state.fk_id_usuario,
          fk_numero_vaga: this.state.fk_numero_vaga,
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
    this.props.navigation.navigate('VAGA PCD')
  }else{
    alert("Senha incorreta, tente novamente.");
  }
  };
  clearData = () => {
    this.setState({
      id_denuncia: null,
      descricao: null,
      p_referencia: null,
      placa_carro: null,
      fk_id_usuario: null,
      fk_numero_vaga: null,
      fk_foto:null,
      nomeusuario: null,
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

  componentDidMount(){
    this.setState({ fk_foto: this.makeid(10)});
  }

  render() {
  const { route } = this.props;
  const { id, cpf, nome, senha } = route.params;

  return (
    <SafeAreaView style={{backgroundColor:'white'}}>

          <Header transparent style={{marginBottom: 100, marginTop:60, backgroundColor:'white'}}>

              <Button transparent style={{paddingBottom: 100, marginTop: 50}}
                   onPress={() =>
                   this.props.navigation.navigate('Fotografar',{id:this.state.fk_foto, cpf: cpf, nome: nome})}>
                   <Image
            style={{marginTop:80, width: 150, height: 150, alignSelf: 'center'}}
            source={require('./../assets/foto.png')}></Image>
             </Button>
           </Header >
      <View style={{backgroundColor:'white'}}>
              <Item rounded style={styles.itens}>
              <Label style={{ marginLeft: 7 }}>Local(Referência):</Label>
                <Input
                  value={this.state.p_referencia}
                  onChangeText={(texto) => this.setState({ p_referencia: texto })}
                   />
              </Item>

              <Item rounded style={styles.itens}>
              <Label style={{ marginLeft: 7 }}>Placa do carro:</Label>
                <Input
                value={this.state.placa_carro}
                onChangeText={(texto) => this.setState({ placa_carro: texto,fk_id_usuario: cpf,
      fk_numero_vaga: id,
      nomeusuario: nome  })}
                />
              </Item>

              <Item rounded style={styles.itens}>
              <Label style={{ marginLeft: 7 }}>Descrição da situação:</Label>
                <Input
                  value={this.state.descricao}
                  onChangeText={(texto) => this.setState({
                    descricao: texto,
                    })}
                  />
              </Item>


              <Button
              rounded
              success
                style={styles.botao_entrar}
                onPress={() =>
                {
                  this.audio();
                  this.salvar()}
                }
                >
                <Text> Denunciar </Text>
              </Button>

    </View>
   </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  itens:{
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },

  botao_entrar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
});
