import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// TODO change this screen to class
// components
import NavigationBack from '../components/NavigationBack';
import { color } from 'react-native-reanimated';

const MultiLevel2Screen = () => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Multi screen level 2 content area</Text>
    </ScrollView>
  );
};

MultiLevel2Screen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <NavigationBack navigation={navigation} />,
  headerRight: () => <View style={{ flex: 1 }} />,
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Level 2',
  color: 'green'
});

export default MultiLevel2Screen;
