import {StackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ShopScreen from './screens/ShopScreen';
import AboutScreen from './screens/AboutScreen';
import Tab from './screens/Tab';


const Router = StackNavigator({
    Home:  { 
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home Screen',
            headerLeft: null
        } 
    },
    Chat:  { 
        screen: ChatScreen,
        navigationOptions: {
            headerLeft: null 
        }
    },
    Shop:  { 
        screen: ShopScreen, 
        navigationOptions: { 
            title: 'Shop Screen', 
            headerLeft: null 
        } 
    },
    About: { 
        screen: AboutScreen, 
        navigationOptions: {
            title: 'About Screen',
            headerLeft: null
        },
    },
    Tab: {
        screen: Tab,
        navigationOptions: {
            headerLeft: null
        }
    }
});


export default Router;