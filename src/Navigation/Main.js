import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from '../Screens/Auth/LoginScreen/LoginScreen'
import RegisterScreen from '../Screens/Auth/RegisterScreen/RegisterScreen'


import DrawerNav from './DrawerNav'

class Main extends Component {

    constructor (props) {
        super(props)
        this.state = {
            showError: false,
            error: null,
        } 
    }
    render () {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none" initialRouteName="Register">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    {/* <Stack.Screen name="ForgetScreen" component={ForgetScreen} /> */}
                    <Stack.Screen name="Drawer" component={DrawerNav} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Main;
