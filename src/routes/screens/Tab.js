import React, {Component} from 'react'
import {Text, View, Button} from 'react-native';
import { TabNavigator } from "react-navigation";


class RecentChatsScreen extends Component {
  render() {
    return (
        <View>
            <Text>List of recent chats</Text>
            <Button
                onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
                title="Chat with Lucy"
            />
            
        </View>
    );
  }
}

class AllContactsScreen extends Component {
  render() {
    return (
        <View>
            <Text>List of all contacts</Text>
            <Button
                onPress={() => this.props.navigation.navigate('Chat', { user: 'Jane' })}
                title="Chat with Jane"
            />
        </View>
    )
  }
}

const Tab = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default Tab;