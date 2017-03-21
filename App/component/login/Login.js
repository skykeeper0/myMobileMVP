import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { connect } from 'react-redux';
// import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';

import styles from './login_style';
import { StackNavigator } from 'react-navigation';

// const background = require('../../../images/shadow.png');

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  checkName() {
    const name = this.state.name;
    this.props.checkName(name);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            {/*<Image source={background} style={styles.shadow}>*/}
              <View style={styles.bg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                  />
                </Item>
                <Button style={styles.btn} onPress={() => this.checkName()} >
                  <Text>Login</Text>
                </Button>
              </View>
            {/*</Image>*/}
          </Content>
        </View>
      </Container>
    );
  }
}


export default Login;