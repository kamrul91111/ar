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
    name: 'Artichoke, Cynara scolymus',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2018%2F05%2F16021645%2F100166960.jpg&w=248&h=166&c=sc&poi=%5B275%2C275%5D&q=85',
    id: 'Sun',
    id2:'Purple',
    id3: 'Gray/Silver',
    id4:'Vegetable',
    id5: '3 To 8 Feet',
   id6: 'Reblooming',
    id7: 'Low Maintenance',
    id8: '' ,
    id9:'Artichoke is a bold plant with huge silvery-green leaves that are finely cut and divided, giving them a thistlelike appearance. The plant’s big flower buds (the outer petals end in thorns that soften when cooked) rise above the clumps of foliage. They have been prized by gourmands for decades, making them some of the more expensive vegetables at the grocery store. If you love these buds, too, growing your own artichoke is a great way to save money. Harvest the flower buds before they bloom, then steam or boil them before scooping out the fleshy inner layer of each bract, as well as from the heart at the base of the bracts.  This South American plant is a close relative of cardoon, and like cardoon, grows well in large containers, garden beds, and borders. This plant behaves as a perennial in Zones 7 and warmer. In areas with colder winters, it can be treated as a long-season annual if started early in spring with harvest in late summer to autumn'
  },
  {
    name: 'Amaranth, Amaranthus hypochondriacus',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31225643%2F101035817.jpg&w=248&h=166&c=sc&poi=%5B275%2C275%5D&q=85',
    id: 'Sun',
    id2:' Red, Orange, Yellow',
    id3: 'Blue/Green',
    id4:' Annual, Vegetable',
    id5: '3 To 8 Feet',
   id6: 'Summer Bloom',
    id7: 'Low Maintenance, Cut Flowers',
    id8: 'Drought Tolerant',
    id9:'Grain amaranth is prized for its highly nutritious, golden seeds. High in protein and well-balanced in amino acids, amaranth has become popular in recent years as a flour. It is also popped and flaked and used like other cereal grains like wheat and oats. Grain amaranth is part of a large genus of plants that includes popular ornamental amaranth, such as love-lies-bleeding with its ropelike strands of flowers and Joseph’s coat with its technicolor foliage. Grain amaranth is less showy, but its culinary uses give it garden accolades. Harvest young leaves for use in salads a month or so after seeding.'
  },
  
];


const Vegetable = () => {
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


export default Vegetable;
