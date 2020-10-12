import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import PlantList from '../screens/PlantList';

// icons
import SvgCog from '../components/icons/Svg.Cog';

const SettingsTabBarIcon = ({ focused }) => <SvgCog active={focused} />;
SettingsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Settings Stack
// /////////////////////////////////////////////////////////////////////////////
const PlantStack = createStackNavigator(
  {
    Plants: PlantList
  },
  {
    navigationOptions: {
      tabBarLabel: 'Plants',
      tabBarIcon: SettingsTabBarIcon
    }
  }
);

export default PlantStack;
