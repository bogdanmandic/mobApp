import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Input from '../../components/Input';



export default class ChatScreen extends Component {
    state = { msg: '' }

    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        const isInfo = state.params.mode === 'info';
        const { user } = state.params;
        return {
            title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
                />
            ),
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
                <Button
                    onPress={() => navigate('Tab')}
                    title='Go to Tab view chat'
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder='Send message'
                    onChangeText={(msg) => this.setState({ msg })}
                    value={this.state.msg}
                />
            </View>
        );
    }
}