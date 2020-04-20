import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ChangeInfo extends Component {
    render() {
        const { navigation } = this.props;
        return(
            <View style={{flex:1, backgroundColor:'#B4B4B4'}}>
                <Text>ChangeInfo Component</Text>
                <Button
                    title="Go back Main"
                    onPress={() => navigation.goBack()}
                />
            </View>
        );
    }
}