import React, { Component } from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text}
from 'native-base';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

//Não esqueçam o AccessToken pra testar ;) 
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
  }, container: {
    flex: 1,
  },

  //Estilos dos pins(Ainda não consegui usar um .png em cima do mapa, Jojo)
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#005EFF',
    transform: [{ scale: 0.8 }],
  }

});
  export default class TelaMapa extends Component {
    // Renderização dos 'pins' no mapa, Jojo
    renderAnnotations() {
      return (
        <MapboxGL.PointAnnotation
          id='Xanxerê'
          coordinate={[-52.4076058,-26.8737824]}
        >
          <View style={styles.annotationContainer}>
            <View style={styles.annotationFill} />
          </View>
          <MapboxGL.Callout title='Xanxerê' />
        </MapboxGL.PointAnnotation>
      )
    }
  

  

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
        // Renderização do mapa (coordenadas centrais e local do usuário não funcionais no momento)
        <MapboxGL.MapView
          centerCoordinate={[-52.4076058,-26.8737824]}
          style={styles.container}
          showUserLocation
          styleURL={MapboxGL.StyleURL.map}
        >
        {this.renderAnnotations()}
        </MapboxGL.MapView>
      );
    }
  

 
    
}

