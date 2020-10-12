import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants';

// navigation stacks
import HomeStack from './HomeStack';
import ArStack from './ArStack';
import StatsStack from './StatsStack';
import PlantStack from './PlantStack';

export default createBottomTabNavigator(
  {
    HomeStack,
    ArStack,
    StatsStack,
    PlantStack
  },
  {
    initialRouteName: 'HomeStack',
    tabBarOptions: {
      activeTintColor: {
        light: colors.blue,
        dark: colors.blue
      },
      inactiveTintColor: {
        light: colors.grey,
        dark: colors.white20
      }
    }
  }
);
