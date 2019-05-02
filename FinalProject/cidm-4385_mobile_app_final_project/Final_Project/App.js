// https://github.com/nathvarun/React-Native-Layout-Tutorial-Series/tree/master/Project%20Files/12.%20Airbnb%20UI/%234%20Animated%20Header

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
//import Icon from 'react-native-vector-icons/Ionicons';
import Explore from './screens/Explore';
import Speaker from './screens/Speaker.js';
import Events from './screens/Events.js';
import Maps from './screens/Maps.js';
import Profile from './screens/Profile.js';



const AppNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./assets/explore.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    Speaker: {
      screen: Speaker,
      navigationOptions: {
        tabBarLabel: 'SPEAKERS',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./assets/speaker.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    Maps: {
      screen: Maps,
      navigationOptions: {
        tabBarLabel: 'MAPS',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./assets/maps.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarLabel: 'Events',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./assets/events.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./assets/heisenberg.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  }
);
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer;
