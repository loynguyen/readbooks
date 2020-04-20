import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Button} from 'react-native';
import { Block, Text } from 'expo-ui-kit';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './Menu';

export default class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <Block style={{flex: 1, backgroundColor: 'blue'}}>
          <Text>Main Screen</Text>
        </Block> */}
        <Menu />
      </NavigationContainer>
    );
  }
}
