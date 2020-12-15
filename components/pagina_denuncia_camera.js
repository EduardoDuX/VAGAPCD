import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import firebase from './firebase';
import {Button} from 'native-base';
export default class CameraPage extends React.Component {
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    this.getPermissionAsync();
  } 

  getPermissionAsync = async () => {
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
     
    }
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  };

  selecionarImagem = async (id) => {
     this.getPermissionAsync();
     if(this.state.hasPermission) {
       let foto = await ImagePicker.launchImageLibraryAsync({
         allowsEditing: true,
        aspect: [4,3],
     });

        console.log(foto);
        if(!foto.cancelled){
          this.uploadImage(foto.uri, id) .then(() => {
        Alert.alert("Sucesso", "Imagem enviada com sucesso!"); this.props.navigation.navigate('Denunciar');
       }).catch((error) => {
         Alert.alert("Erro", "Imagem nao enviada com sucesso!");
       })
        }
     }
   };

   tirarFoto = async(id) => {
     this.getPermissionAsync();

     if(this.state.hasPermission) {
       const options = {quality: 0.5, base64: true};
       const foto = await this.camera.takePictureAsync(options);

       this.uploadImage(foto.uri, id)
       .then(() => {
        Alert.alert("Sucesso", "Imagem enviada com sucesso!"); this.props.navigation.navigate('Denunciar');
       }).catch((error) => {
         Alert.alert("Erro", "Algo deu errado, por favor tente novamente.");
       })
     }
    };


  uploadImage = async (uri, nomeImagem) => {
      const responde = await fetch(uri);
      const blob = await responde.blob(uri);

      var ref = firebase.storage().ref().child('images/' + nomeImagem);
      return ref.put(blob);
    };

  mudarCamera = async () => {
    const { cameraType } = this.state;
    this.setState({
      cameraType:
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back,
    });
  };

  render() {
  const { route } = this.props;
  const { id } = route.params;
    const { hasPermission } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>Sem acesso a câmera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
        
          <Camera
            style={{ flex: 1 }}
            type={this.state.cameraType}
            ref={(ref) => {
              this.camera = ref;
            }}>
            <View   style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                
              }}>
 <Button style={styles.botao_obs}
                onPress={() => Alert.alert('Observações para a foto', "Procure tirar uma foto abrangente, mostrando o veículo estacionado na vaga. Busque também mostrar a placa do carro e o modelo.")}>
                  <Text style={styles.botao_obs_txt}> Obs </Text>
                </Button>
             </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 30,
              }}>
              
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
                onPress={() => this.selecionarImagem(id)}>
                <Ionicons
                  name="ios-photos"
                  style={{ color: '#fff', fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
                onPress={() => this.tirarFoto(id)}>
                <FontAwesome
                  name="camera"
                  style={{ color: '#fff', fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
                onPress={() => this.mudarCamera()}>
                <MaterialCommunityIcons
                  name="camera-switch"
                  style={{ color: '#fff', fontSize: 40 }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({

  botao_obs: {
 backgroundColor: '#26abff',
  },

   
 
},)
