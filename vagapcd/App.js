
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './components/TelaLogin';
import TelaMapa from './components/TelaMapa';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Entrar"
        screenOptions={{
        headerStyle: {
          backgroundColor: '#26abff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
          <Stack.Screen name="Entrar" component={TelaLogin} />
          <Stack.Screen name="Mapa" component={TelaMapa} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
