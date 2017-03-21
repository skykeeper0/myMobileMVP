import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { connect } from 'react-redux';
// import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';

import { StackNavigator } from 'react-navigation';
import Login from '../login/Login';
import Menu from '../menu/Menu';
import Home from '../home/Home';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  checkName(name) {
    if (name === 'admin') {
      console.log('access granted')
      this.setState({
        loggedIn: true
      })
    } else {
      console.log('access denied')
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Menu />
    }
    return <Login checkName={(name) => this.checkName(name)} />
  }
}


export default Main;