import React, { Component } from 'react';
import { Container, Content, Segment, Left, Right, Button, Icon, Header,Body, Text, Tab, Tabs, TabHeading } from 'native-base';
import Login from '../login/Login';
import Home from '../home/Home'

class Menu extends Component {
  constructor(props){
    super(props)
  }

    render() {
      return (
      <Container>
          <Header hasTabs />
          <Tabs initialPage={1}>
                <Tab heading={ <TabHeading><Icon name="person" /></TabHeading>}>
                    <Text>Awesome segment</Text>
                </Tab>
                <Tab heading={ <TabHeading><Icon name="pulse" /></TabHeading>}>
                    <Text>Awesome segment</Text>
                </Tab>
                <Tab heading={ <TabHeading><Icon name="paper" /></TabHeading>}>
                    <Text>Awesome segment</Text>
                </Tab>
          </Tabs>
      </Container>
      );
    }
}


export default Menu;