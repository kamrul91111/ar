import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, Text, Linking, Header } from 'react-native';


const Shop = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>Shop Plants</Text>
      <Text style={styles.header}>Welcome! We’ll direct you below to some useful links to Plants and gardening necessities that will bring your garden to life 😊</Text>
      <Text style={styles.h2}>View the links by clicking on the images below</Text>
    <TouchableOpacity
          onPress={ ()=> Linking.openURL('https://www.bunnings.com.au/our-range/garden/garden-tools') }
    >
      <Image
        style={styles.thumbnail}
        source={{ uri: 'https://logos-download.com/wp-content/uploads/2016/06/Bunnings_Warehouse_logo_small.png' }}
      />
      </TouchableOpacity>
      <TouchableOpacity
          onPress={ ()=> Linking.openURL('https://www.flowerpower.com.au/products/plants') }
    >
      <Image
        style={styles.thumbnail}
        source={{ uri: 'data:image/png;base64,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' }}
      />
      </TouchableOpacity>
      <TouchableOpacity
          onPress={ ()=> Linking.openURL('https://www.sydneyplantmarket.com.au/') }
    >
      <Image
        style={styles.thumbnail}
        source={{ uri: 'https://lirp-cdn.multiscreensite.com/ab63b262/dms3rep/multi/opt/BG020-5e878189-640w.jpg' }}
      />
       </TouchableOpacity>
       <TouchableOpacity
          onPress={ ()=> Linking.openURL('https://www.gardenexpress.com.au/') }
    >
      <Image
        style={styles.thumbnail}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3JrAq2hVNTaupDyLF12ayqqOeX9w-9Iu_PQ&usqp=CAU' }}
      />
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  thumbnail: {
    width: 350,
    height: 250,
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
  },
  h1: {
    textAlign: "center",
    fontSize: 35,
    color: 'green',
    marginTop: 10,
    textShadowColor: '#666',
    textShadowRadius: 10,
    fontFamily: 'Baskerville',
  },
h2: {
  textAlign: "center",
  fontSize: 15,
  marginBottom: 10,
  fontFamily: 'Roboto',
}
});
export default Shop;