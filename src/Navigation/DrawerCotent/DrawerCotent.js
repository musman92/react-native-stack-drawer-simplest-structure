import React, { Component } from 'react';

import { ScrollView, Text, Image, View } from 'react-native'
// import { Images } from '../Themes'

import styles from './DrawerCotentStyle'

import {
    DrawerItem,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';

class DrawerCotent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            showError: false,
            error: null,
        }
    }

    async logout() {
        // await AsyncStorage.clear()
        // this.props.navigation.navigate('LoginScreen');
        console.log(33)
    }

      
    render () {
        return (
            <DrawerContentScrollView {...this.props}>
                <DrawerItem
                    label="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <DrawerItem
                    label="Abc"
                    onPress={() => this.props.navigation.navigate('Abc')}
                />
          </DrawerContentScrollView>
        )
      }
}

export default DrawerCotent;
