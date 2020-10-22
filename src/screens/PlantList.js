import React from 'react';
import PropTypes from 'prop-types';

import { SliderBox } from 'react-native-image-slider-box';

import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Button
} from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';
import { AntDesign } from '@expo/vector-icons';

// components

import Touch from '../components/Touch';

const DATA = [
  {
    name: 'ANNUAL',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: require('../assets/images/visual.png'),
    id: 'Annual'
  },
  {
    name: 'BULB',
    // "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
    photo: require('../assets/images/indoor.png'),
    id: 'Bulb'
  },
  {
    name: 'FRUITS',
    photo: require('../assets/images/outdoor.png'),
    id: 'Fruits'
  },
  {
    name: 'HERBS',
    photo: require('../assets/images/pest.png'),
    id: 'Herbs'
  },

  {
    name: 'HOUSEPLANT',
    photo: require('../assets/images/shop.png'),
    id: 'Houseplant'
  },

  {
    name: 'PRENNIAL',
    id: 'Prennial'
  },
  {
    name: 'ROSES',
    photo: require('../assets/images/tips.png'),
    id: 'Roses'
  },
  {
    name: 'SHRUB',
    photo: require('../assets/images/tips.png'),
    id: 'Shrub'
  },
  {
    name: 'TREE',
    photo: require('../assets/images/tips.png'),
    id: 'Tree'
  },
  {
    name: 'VEGETABLE',
    photo: require('../assets/images/tips.png'),
    id: 'Vegetable'
  },

  {
    name: 'VINE',
    photo: require('../assets/images/tips.png'),
    id: 'Vine'
  },
  {
    name: 'WATER PLANTS',
    photo: require('../assets/images/tips.png'),
    id: 'Waterplant'
  },
  
  
];


const PlantList = ({ navigation }) => {
  function Item({ item }) {
    return (
      <View style={styles.listItem}>
        

        <TouchableOpacity onPress={() => navigation.navigate(item.id)}>
          <Text style={styles.textitem}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Text style ={styles.text}>Plant Encyclopedia </Text>
      <FlatList
        style={{ flex: 1 }}
        vertical
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        numColumns={2}
      />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F7F7F7'
    // marginTop:60
  },
  listItem: {
    margin: 5,
    padding: 15,
    backgroundColor: '#FFF',
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'flex-start'
  },
  text: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 30
  },
  textitem: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },

  image: {
    height: 300,
    width: 350,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default PlantList;
