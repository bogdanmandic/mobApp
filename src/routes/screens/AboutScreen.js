import React, {Component} from 'react'
import {View, Text, Button} from 'react-native';



export default class About extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is about us SCREEN</Text>
                <Text></Text>
                <Button
                    onPress={() => navigate('Home')}
                    title='Back to Home'
                />
            </View>
        );
    }
}