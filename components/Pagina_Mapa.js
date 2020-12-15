import React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Permissions,
} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
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

Location.requestPermissionsAsync();

function VerificaGPS() {
  if (!Location.hasServicesEnabledAsync()) {
    alert('Ative o GPS para usar todos os recursos do aplicativo');
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -26.8774774,
        longitude: -52.4047835,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      },
      vagas: [
      ],
    };
  }
  carregarDados = () => {
    firebase
      .database()
      .ref('vagas')
      .on('value', (snapshot) => {
        var vetorTemp = [];
        snapshot.forEach((child) => {
          vetorTemp.push({
            id: child.key,
            coordenada: {
              latitude: child.val().latitude,
              longitude: child.val().longitude,
              
            },
          });
        });
        this.setState({ vagas: vetorTemp });
      });
      console.log(this.state.vagas);
  };

  componentDidMount() {
    this.carregarDados();
  }

  render() {
  const { route } = this.props;
  const { cpf, nome, senha } = route.params;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.region}
          showsUserLocation={true}
          followsUserLocation={false}>
          {this.state.vagas.map((vaga) => {
            return (
              <MapView.Marker coordinate={vaga.coordenada} pinColor="lightblue">
                <MapView.Callout
                  onPress={() =>
                    this.props.navigation.navigate('Denunciar', {
                      id: vaga.id, cpf: cpf, nome: nome, senha:senha
                    })
                  }>
                  <View>
                    <Text>Reportar essa vaga</Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
