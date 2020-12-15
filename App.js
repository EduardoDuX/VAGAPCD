import React from 'react';
import { AppLoading } from 'expo';
import {Container} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Pagina_Home from './components/pagina_home';
import Pagina_Cadastro from './components/pagina_cadastro';
import Pagina_Mapa from './components/Pagina_Mapa';
import Pagina_Denuncia from './components/Pagina_Denuncia';
import Pagina_Denuncia_Camera from './components/pagina_denuncia_camera';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
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
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const Stack = createStackNavigator();

    return (
      <Container>
        <NavigationContainer>
          <Stack.Navigator initialRouteName= "Home">
            <Stack.Screen name= "Home" component={Pagina_Home}/>
            <Stack.Screen name= "Cadastrar-se" component={Pagina_Cadastro}/>
            <Stack.Screen name= "VAGA PCD" component={Pagina_Mapa}/>
            <Stack.Screen name= "Denunciar" component={Pagina_Denuncia}/>
            <Stack.Screen name= "Fotografar" component={Pagina_Denuncia_Camera}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    );
  }
}
