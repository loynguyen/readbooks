import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Authentication extends Component {
    // constructor(){
    //     super(props);
    // }
  render() {
    console.log('vao authentication');
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#DFF5C9'}}>
        <Text>Authentication Component</Text>
        <Button title="Go back Main" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
