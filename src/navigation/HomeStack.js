import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';
import Bugs from '../screens/Bugs';
import Shop from '../screens/Shop';
import PlantingTips from '../screens/PlantingTips';
import IndoorPlants from '../screens/IndoorPlants';
import OutdoorPlants from '../screens/OutdoorPlants';

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
    OutdoorPlants: OutdoorPlants,
    PlantingTips: PlantingTips,
    IndoorPlants: IndoorPlants,

  },
  {
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: HomeTabBarIcon
    }
  }
);

export default HomeStack;
