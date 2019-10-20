import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './Home';
import Partner from './Partner';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Partner: {
      screen: Partner,
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        paddingBottom: 15,
        fontSize: 13,
      },
      activeTintColor: 'black',
      activeBackgroundColor: 'lightgray',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
