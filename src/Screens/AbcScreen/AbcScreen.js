import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from '@react-navigation/native';

class AbcScreen extends Component {

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
                <Text style={{ marginBottom: 30 }}>Abc Screen</Text>
                <Button style={{ marginBottom: 50 }} onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer()) } title="open Drawer" />
                <Button onPress={() => this.props.navigation.navigate('Login')} title="Login" />
            </View>
        );
    }
}

export default AbcScreen;
