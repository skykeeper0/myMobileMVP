

'use strict'

import {Container, Content, Text, StyleProvider} from 'native-base';
import React, {Component} from 'react';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import {
  AppRegistry,
} from 'react-native';
import Main from './App/component/main/Main';
// import Login from './App/component/login/Login';

class myKorwave extends Component {
    render() {
        return (
          <StyleProvider style={getTheme(material)}>
            <Main />
          </StyleProvider>
        );
    }
}

AppRegistry.registerComponent('myKorwave', () => myKorwave);
