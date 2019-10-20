import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './Components/LoginScreen/Main';
import Dashboard from './Components/Dashboard/Dashboard';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Logout',
    },
  },
});

export default createAppContainer(AppNavigator);
