import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import Input from '../../components/Input';


export default class ChatScreen extends Component {
    state = { msg: '' }

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
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
                <Input 
                    placeholder="Say hello"
                    label="Send message"
                    value={this.state.msg} 
                    onChangeText={msg => this.setState({ msg })}
                />
            </View>
        ); 
    }
}