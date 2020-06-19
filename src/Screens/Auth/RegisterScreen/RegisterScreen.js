import React, { Component } from 'react';
import {
    View,
    Button,
    Text
  } from 'react-native';

class RegisterScreen extends Component {

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
                <Text>Register Screen</Text>
                <Button onPress={() => this.props.navigation.navigate('Login')} title="Login" />
            </View>
        );
    }
}

export default RegisterScreen;
