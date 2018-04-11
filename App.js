import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator }from 'react-navigation';

import HomePage  from './app/pages/home/home';
import AboutPage from './app/pages/about/about';


export default class App extends React.Component {
  render() {
    return (
      
        <Drawer />
      
    );
  }
}

const Drawer = DrawerNavigator(
  {
  Home:{
    screen:HomePage
  },
  About:{
    screen:AboutPage
  }
  },{
    initialRouteName:'Home'
  });



