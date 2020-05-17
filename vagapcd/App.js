
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
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={TelaLogin} />
          <Stack.Screen name="VAGA PCD" component={TelaMapa} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
