import React, { Component } from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Menu from './Menu';

const { height } = Dimensions.get('window');

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }
    render() {
        const { navigation } = this.props;
        return(
            <View style={{flex: 1}}>
                <View>
                    <Button title="Menu" onPress={() => navigation.openDrawer()}/>
                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}