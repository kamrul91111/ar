import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// TODO change this screen to class
// components
// import NavigationBack from '../components/NavigationBack';

const Bugs = ({ navigation }) => {
    const theme = useTheme();
  
    return (
        <View>
          <Text>Bugs</Text>
      </View>
    );
  };


export default Bugs;