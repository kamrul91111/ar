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
        name: 'Ornithogalum, Ornithogalum',
        // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
        photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31224834%2F1121611.jpg&w=248&h=166&c=sc&poi=face&q=85',
        id: ' Part Sun, Sun',
        id2:' White',
        id3: 'Blue/Green',
        id4:' Bulb, Perennial',
        id5: '6 To 12 Inches, 1 To 3 Feet',
       id6: 'Summer Bloom',
        id7: '',
        id8: 'Deer Resistant, Groundcover',
        id9:'Little known and underused in spring gardens, leucojum earns its name from the Greek "white violet." Larger, but similar in looks to galanthus, leucojum has nodding, bell-shape blooms borne on stalks that, depending on the variety, are 9-14 inches tall.The plants hold their bloom for one to two weeks. Leucojum autumnale is a small, fall-blooming cousin.Plant leucojum in the fall in locations with sandy, well-drained soil that receive full sun or part shade. Plant bulbs 3-4 inches deep and 4 inches apart. Crowded clumps can be dug and divided after the foliage has withered in summer. This bulb naturalizes well and produces lovely, white, bell-shape blooms and attractive foliage that becomes more dense every year.'
      },
  {
    name: 'Lavender, Lavandula spp.',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F06%2F08%2Flavender-growing-in-containers.jpg&w=248&h=166&c=sc&poi=face&q=85',
    id: 'Sun',
    id2:'Blue',
    id3: ' Gray/Silver',
    id4:'Perennial, Herb, Shrub',
    id5: '1 To 3 Feet',
   id6: 'Summer Bloom',
    id7: 'Good For Containers, Fragrance, Cut Flowers, Attracts Birds',
    id8: 'Slope/Erosion Control, Groundcover, Drought Tolerant, Deer Resistant' ,
    id9:'Lavender fills the early-summer garden with sensory delights: beautiful purple-tone blooms atop foliage that emanates its fresh scent on a sunny afternoon. Every part of the plant is infused with aromatic oil, making this a choice herb to place along pathways or near outdoor seating areas so you can experience the pleasant fragrance. Lavender varieties abound: The darker the flower, the more intense the aroma as well as the flavor in cooking.'
  }
 
  
];


const Perennial = () => {
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


export default Prennial;
