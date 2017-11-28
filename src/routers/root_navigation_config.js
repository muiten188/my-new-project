import Home from '../containers/Home';

import {
    addNavigationHelpers,
    StackNavigator,
} from 'react-navigation';

const stackNavigatorConfiguration = {
    initialRouteName: 'Home',
    headerMode: 'screen'
}

export const RootNavigationContainer = StackNavigator({
    Home: { screen: Home }
}, stackNavigatorConfiguration)