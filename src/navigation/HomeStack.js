import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';
import Bugs from '../screens/Bugs';
import Shop from '../screens/Shop';
import PlantingTips from '../screens/PlantingTips';

// screens
import HomeScreen from '../screens/HomeScreen';

// icons
import SvgHome from '../components/icons/Svg.Home';

const HomeTabBarIcon = ({ focused }) => <SvgHome active={focused} />;
HomeTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Home Stack
// /////////////////////////////////////////////////////////////////////////////
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Bugs: Bugs,
    Shop: Shop,
    PlantingTips: PlantingTips
  },
  {
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: HomeTabBarIcon
    }
  }
);

export default HomeStack;
