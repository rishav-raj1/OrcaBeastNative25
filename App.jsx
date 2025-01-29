import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTab from './HomeBottomTab';
import Profile from './src/Profile';
import Search from './src/Search';
import DrawerNav from './DrawerNav';
import Home from './src/Home';

const Stack = createStackNavigator();

class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeTabs" component={HomeBottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={DrawerNav} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
