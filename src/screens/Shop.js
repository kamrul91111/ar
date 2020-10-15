import React from 'react';
import { ScrollView, Text, View, Linking, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// TODO change this screen to class
// components
// import NavigationBack from '../components/NavigationBack';

const Shop = () => {
  
    return (
        <View>
          <Text>Shop Plants</Text>
          <Text>A huge range of garden tools and accessories to compliment the garden, keep your garden healthy or to make gardening easier. Select from quality brands like Felco, Wolf-Garten, Solo Sprayers, Neutrog and many more.</Text>
          <Button 
            title='Click Here To Open Website URL' 
            onPress={ ()=> Linking.openURL('https://reactnativecode.com') } />
          <TouchableOpacity
                onPress={ ()=> Linking.openURL('https://reactnativecode.com') }
          >
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


export default Shop;
