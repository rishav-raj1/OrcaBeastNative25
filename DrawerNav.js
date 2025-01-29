import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Home';
import Profile from './src/Profile';
import Search from './src/Search';

const Drawer = createDrawerNavigator();


export class DrawerNav extends Component {
  render() {
    return (
      <Drawer.Navigator>
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
    )
  }
}

export default DrawerNav