import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native'
import Home from './src/Home';
import Profile from './src/Profile';
import Search from './src/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import DrawerNav from './DrawerNav';

const Tab = createBottomTabNavigator();

class HomeBottomTab extends Component {
  render() {
    return (
      <Tab.Navigator>
        {/* <Tab.Screen initialRouteName="DrawerNav" name="Drawer" component={DrawerNav} /> */}
        <Tab.Screen name="Home" component={DrawerNav} 
         options={() => ({
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
       
        })}
        />
        <Tab.Screen name="Search" component={Search}
         options={() => ({
          headerShown: true,
          tabBarIcon: ({ tintColor }) => (
            <Octicons name="search" size={24} color="black" />
          ),
       
        })} />
        <Tab.Screen name="Profile" component={Profile} 
         options={() => ({
          headerShown: true,
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="person-circle-outline" size={26} color="black" />
          ),
       
        })}/>
      </Tab.Navigator>
    );
  }
}

export default HomeBottomTab;
