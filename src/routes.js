import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';

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

      // todas as telas vao herdar essas options
      defaultNavigationOptions: {
        // no android sempre coloca na esquerda, com isso vai centralizar
        headerLeft: () => null,
        headerTitle: navigation => (
          <Image
            style={{ width: 185, height: 24 }}
            source={logo}
            // onPress={() => navigation.navigate('Home')}
          />
        ),
        headerRight: navigation => (
          <Icon
            style={{ marginRight: 20 }}
            name="shopping-basket"
            size={30}
            color="#fff"
            // onPress={() => navigation.navigate('Cart')}
          />
        ),
        // headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#141419',
        },
        // cor que vai preencher nos titulos, botoes que estiverem no HEADER
      },
    }
  )
);

export default Routes;
