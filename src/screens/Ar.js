import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Switch, Button, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';


const Ar = ({ navigation }) => {
  const theme = useTheme();

  return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={styles.buttonText}>View in AR</Text>
      </TouchableOpacity>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  image: {
    height: 100,
    width: 150,
    alignSelf: "center"
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#0099CC",
    padding: 10,
    marginBottom: 10,
    // width: 300,
    marginTop: 5,
    width: 150, 
    height: 150, 
    borderRadius: 400/ 2,
    alignContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: 'white',
    textAlign: "center",
    marginTop: 50
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
