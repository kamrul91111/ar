import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';



// screens
import PlantList from '../screens/PlantList';
import Annual from '../screens/Annual';
import Bulb from '../screens/Bulb';
import Fruits from '../screens/Fruits'
import Herbs from '../screens/Herbs'
import Houseplant from '../screens/Houseplant'
import Prennial from '../screens/Prennial'
import Shrub from '../screens/Shrub'
import Tree from '../screens/Tree'
import Vegetable from '../screens/Vegetable'
import Vine from '../screens/Vine'
import Waterplant from '../screens/Waterplant'
import Roses from '../screens/Roses'

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
    Plants: PlantList,
    Annual:Annual,
    Bulb:Bulb,
    Fruits:Fruits,
    Herbs:Herbs,
    Houseplant:Houseplant,
    Prennial:Prennial,
    Shrub:Shrub,
    Tree:Tree,
    Vegetable:Vegetable,
    Vine:Vine,
    Waterplant:Waterplant,
    Roses:Roses


  },
  {
    navigationOptions: {
      tabBarLabel: 'Plants',
      tabBarIcon: SettingsTabBarIcon
    }
  }
);

export default PlantStack;
