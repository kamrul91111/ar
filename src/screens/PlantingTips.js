import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';
import NavigationBar from 'react-native-navbar-color'

class PlantingTips extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const {navigation} = this.props;

    return (
        <ScrollView style={styles.container}>
          <StatusBar backgroundColor = '#a384ff' />
          <Text style={styles.h1}>Planting Tips</Text>
          <Text style={styles.header}>Here are some useful tips for you to get started with your own gardening projects. </Text>
          <Image
          style={{width: 300, height: 400, alignSelf: "center"}}
          source={{uri: 'https://media.giphy.com/media/11vDNL1PrUUo0/giphy.gif'}} />
          <Text style={styles.header}>1. Consider what to Plant: important to figure out what type of plants you want in your garden first</Text>
          <Text style={styles.header}>2. Pick the Correct spot: almost all vegetables, fruits, plants and flowers require 6-8 hours of sunlight. Choose a spot accordingly</Text>
          <Text style={styles.header}>3. Clear the ground: get rid of the sod covering the area you plan to plant your seeds</Text>

          <Text style={styles.header}>4. Improve the soil: the more fertile the soil, the better your plants will grow</Text>
          <Text style={styles.header}>5. Pick your plants: choose what suits you best, end of the day it is your garden. Check out our plants in the Shop Plants page</Text>
          <Image
          style={{width: 300, height: 250, alignSelf: "center"}}
          source={{uri: 'https://media.giphy.com/media/vNpNvgxI4EtdVjBGh3/giphy.gif'}} />
          <Text style={styles.header}>6. Start planting: put the seeds in the soil and cover up</Text>
          <Text style={styles.header}>7. Water at the right time: seedlings should never be dried out. Ensure to water daily</Text>
          <Text style={styles.header}>8. Protect garden with Mulch: To help keep weeds out and moisture in, cover the soil with a couple of inches of mulch</Text>
          <Text style={styles.header}>9. Maintain your Garden: continue doing the essentials: water, pull weeds, spray insecticidal soap</Text>
         <Image
          style={{width: 350, height: 300, alignSelf: "center", marginBottom: 20}}
          source={{uri: 'https://media.giphy.com/media/1gRuaA7bpSbxRZFhVp/giphy.gif'}} />
      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#e5e2ed'
  },
  thumbnail: {
    width: 350,
    height: 400,
    padding: 10,
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 20,
    borderColor: 'green',  
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  header: {
    fontSize: 17,
    padding: 10,
    fontFamily: 'Roboto',
    textAlign: "center"
  },
  h1: {
    textAlign: "center",
    fontSize: 35,
    color: 'black',
    marginTop: 10,
    textShadowColor: '#666',
    textShadowRadius: 6,
  },
h2: {
  textAlign: "center",
  fontSize: 15,
  marginBottom: 10,
  fontFamily: 'Roboto',
}
});



export default PlantingTips;
