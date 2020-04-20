import React, {Component} from 'react';
import { Image } from 'react-native';
import { Block, Text, Button } from 'expo-ui-kit';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Authentication from './../../Authentication/Authentication';
import ChangeInfo from './../../ChangeInfo/ChangeInfo';
import Books from './Books';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: null,
    }}>
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
    </Stack.Navigator>
  )
}

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Block>
        <Block>
          <Image source={{uri: '../../../Media/temp/sp1.jpeg', height: 60, width: 60}} />
        </Block>
        <DrawerItem
          label="Books"
          onPress={() => props.navigation.navigate('Books')}
        />
        <DrawerItem
          label="Authentication"
          onPress={() => props.navigation.navigate('Authentication')}
        />
        <DrawerItem
          label="ChangeInfo"
          onPress={() => props.navigation.navigate('ChangeInfo')}
        />
      </Block>
    </DrawerContentScrollView>
  )
}

export default class Menu extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Books" drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Screens" component={Screens} />
      </Drawer.Navigator>
    );
  }
}
