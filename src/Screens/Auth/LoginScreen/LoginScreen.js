import React, { Component } from 'react';
import {
    View,
    Button,
    Text
  } from 'react-native';

class LoginScreen extends Component {

    constructor (props) {
        super(props)
        this.state = {
            showError: false,
            error: null,
        } 
    }
    render () {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginBottom: 30 }}>Login Screen</Text>
                <Button style={{ marginBottom: 30 }} onPress={() => this.props.navigation.navigate('Register')} title="Register" />
                <Button onPress={() => this.props.navigation.navigate('Drawer')} title="Go to Drawer Screen" />
            </View>
        );
    }
}

export default LoginScreen;
