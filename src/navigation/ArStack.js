import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Ar from '../screens/Ar';
import MultiLevel2Screen from '../screens/MultiLevel2Screen';

// icons
import SvgPages from '../components/icons/Svg.Pages';
import { ART } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MultiTabBarIcon = ({ focused }) => <SvgPages active={focused} />;
MultiTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Multi Stack
// /////////////////////////////////////////////////////////////////////////////
const ArStack = createStackNavigator(
  {
    Ar: Ar,
    MultiLevel2: MultiLevel2Screen
  },
  {
    navigationOptions: {
      tabBarLabel: 'AR',
      tabBarIcon: MultiTabBarIcon
    }
  }
);

export default ArStack;
