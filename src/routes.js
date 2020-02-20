import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import Cart from './pages/Cart';

import logo from './assets/images/logo.png';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: Home },
      Cart: { screen: Cart },
    },
    {
      initalRoute: 'Home',

      // all screens will inherit this options
      defaultNavigationOptions: ({ navigation }) => ({
        headerLeft: () => null,
        headerTitle: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={{ width: 185, height: 24 }} source={logo} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <Icon
            style={{ marginRight: 20 }}
            name="shopping-basket"
            size={30}
            color="#fff"
            onPress={() => navigation.navigate('Cart')}
          />
        ),
        headerStyle: {
          backgroundColor: '#141419',
        },
      }),
    }
  )
);

export default Routes;
