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
    name: 'Blackberry, Rubus spp.',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31231142%2FBKS018981.jpg&w=248&h=166&c=sc&poi=%5B275%2C275%5D&q=85',
    id: 'Part Sun, Sun',
    id2:'White',
    id3: 'Blue/Green',
    id4:'Fruit, Vine',
    id5: '3 To 8 Feet, 8 To 20 Feet',
   id6: 'Spring Bloom, Summer Bloom',
    id7: 'Attracts Birds, Good For Containers',
    id8: '' ,
    id9:'Blackberries are delicious, nutrient-rich, and relatively easy to grow—making them perfect additions to your home garden or landscape. Even though they bear thorns, the canes are attractive with lush green foliage, white blushing, and charming white flowers.Most varieties get relatively large, so be sure you have room for them before planting. There are two distinct types of blackberries: trailing and erect. Trailing blackberry (also called dewberry) is grown mainly in the South. This type needs to be supported by a trellis, fence, or arbor to keep it up and off the ground. Erect blackberry is a hardy, stiff-caned plant that may or may not need support depending upon the variety. You can also find blackberry varieties with and without thorns.Because blackberry is a big, vigorous plant, it’s well-suited to grow in a patch by itself. This is especially true for trailing blackberry varieties with stems that reach 10 feet long or more and need support. Thorny blackberry can serve as a fence or physical barrier when grown around the edges of a property line. Avoid planting it near driveways or walkways, however. If you don’t have the right place to plant blackberry in the ground, consider growing it in a large container to control its vigorous growth.'
  },
  {
    name: 'Kiwi, Actinidia deliciosa',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31224315%2F100035363.jpg&w=248&h=166&c=sc&poi=face&q=85',
    id: 'Sun, Part Sun',
    id2:'White',
    id3: '',
    id4:'Perennial, Vine',
    id5: '8 To 20 Feet',
   id6: 'Spring Bloom',
    id7: '',
    id8: '',
    id9:'Clusters of fuzzy, brown kiwifruits have an unassuming presence, but once you slice one open you will be taken with the fruit sweet, tangy flavor and luscious green flesh. Packed with vitamins, kiwifruits offer many health benefits. This vigorous and productive vine is perfect for growing over an arbor or pergola; it will cast deep shade on the area below. It takes several years for a newly planted vine to come into production, but the wait is worth it.Kiwi vines are male and female; you need one of each for fruit. A pair of vines will usually produce enough fruit for the home garden.'
  },
  
];


const Vine = () => {
  function Item({ item }) {
    return (
        <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:350, height:250}} />
         <Text style={styles.textitem}>{item.name}</Text>
         <View>
        
         <Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Light: </Text> 
           <Text>{item.id}</Text>  </Text>
           <Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Flower Color:</Text> 
           <Text>{item.id2}</Text>  </Text>
           <Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Foilage Color: </Text> 
           <Text>{item.id3}</Text>  </Text>
           <Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Plant Type: </Text> 
           <Text>{item.id4}</Text>  </Text>
           <Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Height: </Text> 
           <Text>{item.id5}</Text>  </Text><Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Season Features: </Text> 
           <Text>{item.id6}</Text>  </Text><Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Special Features: </Text> 
           <Text>{item.id7}</Text>  </Text><Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Problem Solvers: </Text> 
           <Text>{item.id8}</Text>  </Text><Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>Description: </Text> 
           <Text>{item.id9}</Text>  </Text>
         

         </View>

          </View>
          
          
    );
  }
  return (
    <ScrollView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
       Vertical 
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
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
    fontSize: 15
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


export default Vine;
