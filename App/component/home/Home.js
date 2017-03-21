import React, { Component } from 'react';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './home_style';

class Home extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation('Login')}>
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>Home</Title>
          </Body>

          <Right>
            <Button transparent >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>

        <Content>
          <Text> This is home </Text>
        </Content>
      </Container>
    );
  }
}

export default Home;