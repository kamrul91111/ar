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
    name: 'Aloe Vera, Aloe vera',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31230129%2F101626857.jpg&w=248&h=166&c=sc&poi=face&q=85',
    id: ' Sun',
    id2:'Yellow',
    id3: 'Blue/Green, Gray/Silver',
    id4:'Herb,Houseplant',
    id5: '1 to 3 Feet',
   id6: '',
    id7: 'Low Maintenance, Good For Containers',
    id8: 'Drought Tolerant',
    id9:'Aloe vera is an eye-catching perennial that displays lance-shape succulent leaves decorated with white spots and edged with small whitish teeth. The leaves are known for their gel-like sap often used to soothe burns and moisturize skin. Native to hot, dry regions of Africa, this herbaceous perennial prefers frost-free, sunny, well-drained sites where the night temperature never dips below 50 degrees F. Thankfully, adaptable aloe vera makes a great houseplant; use it on its own or let it add vertical interest to a container of vining houseplants, such as philodendron or ivy. Exceptionally easy to grow, aloe vera is a good choice for a new gardener.'
  },
  {
    name: 'Spider Plant, Chlorophytum comosum',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F06%2F08%2Flavender-growing-in-containers.jpg&w=248&h=166&c=sc&poi=face&q=85',
    id: ' Part Sun',
    id2:'White',
    id3: ' Blue/Green',
    id4:'Houseplant',
    id5: '6 To 12 Inches',
   id6: 'Spring Bloom, Fall Bloom, Winter Bloom',
    id7: '',
    id8: '' ,
    id9:'A vintage favorite in the houseplant world, spider plant has been enjoyed in Victorian parlors as much as in studio lofts a century later. It’s easy to see why this plant has stood the test of time: They’re super-easy to grow, tolerate all levels of light, and they don’t mind if you miss a weekly watering. Spider plant, also called airplane plant, grows well in containers or hanging baskets.'
  }
 
  
];


const Houseplant = () => {
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


export default Houseplant;
