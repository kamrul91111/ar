import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Switch, Button, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';


const Ar = ({ navigation }) => {
  const theme = useTheme();

  return (
      <View>
      <StatusBar backgroundColor = '#00ff80' />
        <TouchableOpacity>
        <Image
        style={styles.image}
        source={{ uri: 'https://memegenerator.net/img/instances/59916325/augmented-reality.jpg' }}
      />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 350,
    alignSelf: "center"
  }
});

export default Ar;


// export default class App extends React.Component {
//  render()
//  {
//    return(
//    <View>
//      <Text>AR Screen</Text>
//      <Button
//         title="Press me"
//         onPress={() => navigation.navigate('MultiLevel2Screen')}
//         color="#228B22"
//       />
//    </View>
//    );
//  }
// }
