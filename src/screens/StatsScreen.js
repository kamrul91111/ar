import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const StatsScreen = () => {
  return(
    <View>
      <StatusBar backgroundColor = '#ff8000' />
      <Text style={styles.h1}>Weather Data</Text>
      <Image
          style={styles.background} 
          source={{ uri: 'https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg' }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#e5e2ed'
  },
  h1: {
    textAlign: "center",
    fontSize: 35,
    color: 'black',
    marginTop: 10,
    textShadowColor: '#666',
    textShadowRadius: 6,
  },
  background: {
    height: 200,
    width: 400,
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 40
  }
});
export default StatsScreen;












