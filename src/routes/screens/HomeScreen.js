import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const { headingStyle } = styles;
        return (
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={headingStyle}>Hello, Mob App!</Text>
                </View>
                <Button
                    onPress={() => navigate('Chat', {user: 'RIITECH'})}
                    title='Chat with RIITECH'
                />
                <Text></Text>
                <Button
                    onPress={() => navigate('Shop')}
                    title='Go to shop'
                />
            </View>
        )
    }
}

const styles = {
    headingStyle: {
        fontSize: 24,
        fontWeight: 'bold', 
        color: 'red',
    }
};