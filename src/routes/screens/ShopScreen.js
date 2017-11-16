import React, {Component} from 'react';
import {Text, View, Button, Image, Linking} from 'react-native';



export default class ShopScreen extends Component {
//    static navigationOptions = {
//        headerLeft: null
//     };
    render() {
        const { navigate } = this.props.navigation;
        let pic = {
            uri: 'http://www.primed.rs/wp-content/uploads/uvodna.jpg'
        };
        return (
            <View>
                <Text>Welcome to our shop</Text>
                <Image source={pic} style={{ width: 200, height: 110 }}
                    onPress={() => Linking.openURL(pic)}
                />
                <Text onPress={() => navigate('About')} title="About Us">
                    Click here if you wanna know more about us
                </Text>
            </View>
        );
    }
}