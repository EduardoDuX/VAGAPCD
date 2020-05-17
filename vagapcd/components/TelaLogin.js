import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import { Form, Label, Container, Header,Text ,Right, Content, Item, Input, Icon, Title, Left, Button, Body, Footer, FooterTab } from 'native-base';

export default class TelaLogin extends React.Component {

  _TentarConexaoBD() {

    fetch('http://10.0.0.107/usuario')
        .then(response => response.json())
        .then(users => console.warn(users))
  }

  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {

    const {navigation} = this.props;

    return (

      <Container>

      <View style={{flex:1, alignItems:'center'}}>
        <Image style={{width:300, height:200, resizeMode: 'contain'}} source={require('./../assets/icon.png')}/>
      </View>

      <View  style={{flex:3}}>
          <Content>
            <View>
              <Form>
                <Item floatingLabel>
                  <Label>Usuário:</Label>
                  <Input />
                  </Item>
                  <Item floatingLabel>
                  <Label stle={{alignItems:'center'}}>Senha:</Label>
                  <Input />
                </Item>
              </Form>
            </View>

            <View>
              <Button full style={{backgroundColor:'#26abff', marginTop:15}} onPress={() => navigation.navigate('Mapa')}>
              <Text>
              Entrar
              </Text>
              </Button>

              <Button full style={{backgroundColor:'#26abff', marginTop:3}}>
                <Text>
                  Esqueceu a senha?
                </Text>
              </Button>

              <Button full style={{backgroundColor:'#26abff', marginTop:3}}>
                <Text>
                  Entrar com o google
                </Text>
              </Button>

              <Button full style={{backgroundColor:'#26abff', marginTop:3}}>
                <Text>
                  Criar Conta
                </Text>
              </Button>
            </View>

          </Content>
        </View>

      </Container>

    );
  }
}
