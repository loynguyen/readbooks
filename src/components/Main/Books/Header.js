import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>header Screen</Text>
      </View>
    );
  }
}