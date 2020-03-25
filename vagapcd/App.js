import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setConnected(true);
MapboxGL.setAccessToken("pk.eyJ1IjoidmFnYXBjZCIsImEiOiJjazdtNXp0azkwZjRhM2VucnA2ZDVxZmJoIn0.foRtON7cEC6-6iwP1fTtYg");

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    height: 500,
    width: 600,
    flex: 1
  }
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    return (
      <Container>

        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>

          <Body>
            <Title>VAGA PCD</Title>
          </Body>

          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        <View style={styles.page}>
          <View>
            <MapboxGL.MapView style={styles.map}/>
          </View>
        </View>

        <Footer>
          <FooterTab>
            <Button full>

              <Text>
              Localizar vagas mais próximas
              </Text>

            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
