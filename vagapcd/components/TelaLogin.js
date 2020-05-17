import React from 'react';
import {SafeAreaView, Image, View} from 'react-native';
import { Container, Header,Text ,Right, Content, Item, Input, Icon, Title, Left, Button, Body, Footer, FooterTab } from 'native-base';

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
      <View style={{flex:3}}>
        <Header transparent>
        <Image style={{width:300, height:200, resizeMode: 'contain'}} source={require('./../assets/icon.png')}/>
        </Header>
      </View>

        <View style={{flex:6}}>
        <Content>
          <Input placeholder='Email' />
          <Input placeholder='Senha' />
          <Button onPress={() => navigation.navigate('VAGA PCD')}>
          <Text>
          Entrar
          </Text>
          </Button>

          <Button style={{marginTop:20}}>

            <Text>
              Entrar com o google
            </Text>

          </Button>
        </Content>
        </View>



        <Footer>
          <FooterTab>
          <Button>

            <Text>
              Esqueceu a senha?
            </Text>

          </Button>
          </FooterTab>
        </Footer>

      </Container>

    );
  }
}
