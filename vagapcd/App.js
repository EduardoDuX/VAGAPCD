
import * as React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Button,
  Text,
  Icon,
  Fab,
  View,
  Title,
  Left,
  Right,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { Router, Scene, Actions } from 'react-native-router-flux';

import Login from './login.js';



export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Router
          hideNavBar="true"
          navigationBarStyle={{ backgroundColor: '#302d58' }}>
          <Scene key="root">
            <Scene
              key="Login"
              component={Login}
              title="Tela Login"
              initial={true}
              titleStyle={{
                color: '#ffffff',
                fontSize: 22,
                fontWeight: '700',
                justifyContent: 'center',
                marginLeft: 30,
              }}
              headerTintColor="#ffffff"
            />

          </Scene>
        </Router>
      </Container>
    );
  }
}
