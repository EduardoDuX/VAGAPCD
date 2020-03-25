import React from 'react';
import { Container, Header,Text ,Right, Content, Item, Input, Icon, Title, Left, Button, Body, Footer, FooterTab } from 'native-base';

export default class App extends React.Component {
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
    return (

      <Container style={{backgroundColor: "white"}}>

        <Header transparent style={{marginTop: 70}}>
            <Title>
              <Text  style={{color:'black'}, {fontSize: 40}}>
              VAGA PCD
              </Text>
            </Title>
        </Header>

        <Content style={{marginTop: 90}}>

          <Input placeholder='Email' />
          <Input placeholder='Senha' />

          <Button style={{marginTop:20}}>

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
