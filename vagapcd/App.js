
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './TelaLogin';
import TelaMapa from './TelaMapa';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initial>
          <Stack.Screen name="Login" component={TelaLogin} />
          <Stack.Screen name="Mapa" component={TelaMapa} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
