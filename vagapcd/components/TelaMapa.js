import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text}
from 'native-base';
import MapboxGL from "@react-native-mapbox-gl/maps";


MapboxGL.setAccessToken("");
MapboxGL.setConnected(true);


const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1
  },
  map: {
    height: 500,
    width: 600,
    flex: 1
  }
});

export default class TelaMapa extends React.Component {

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

        

        <View style={styles.page}>
          <View stule={styles.container}>
            <MapboxGL.MapView style={styles.map}/>
          </View>
        </View>


      </Container>
    );
  }
}
