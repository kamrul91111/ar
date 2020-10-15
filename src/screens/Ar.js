import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Switch, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';


const Ar = ({ navigation }) => {
  const theme = useTheme();

  return (
      <View>
        {/* <Button
          onPress={() => navigation.navigate('MultiLevel2')}
          title="Hello"
        />
        <TouchableOpacity
            onPress={() => navigation.navigate('Bugs')}
        >
            <Text>Click me</Text>
        </TouchableOpacity> */}
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
