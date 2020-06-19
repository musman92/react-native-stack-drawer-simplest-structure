import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import AbcScreen from '../Screens/AbcScreen/AbcScreen';

import DrawerCotent from './DrawerCotent/DrawerCotent'

const Drawer = createDrawerNavigator();

class DrawerNav extends Component {

    constructor (props) {
        super(props)
        this.state = {
            showError: false,
            error: null,
        } 
    }
    render () {
        return (
            <Drawer.Navigator 
                drawerContent={(props) => (<DrawerCotent {...props} />)} 
                initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Abc" component={AbcScreen} />
            </Drawer.Navigator> 
        );
    }
}

export default DrawerNav;
