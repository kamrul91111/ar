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
    name: 'Lotus, Nelumbo',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31225537%2F100168836.jpg&w=248&h=166&c=sc&poi=face&q=85',
    id: 'Sun',
    id2:'White,Pink',
    id3: 'Chartreuse/Gold',
    id4:'Water Plant',
    id5: '3 To 8 Feet',
   id6: ' Summer Bloom',
    id7: ' Fragrance, Good For Containers, Cut Flowers',
    id8: '' ,
    id9:'Native to Asia and Australia, the lotus is considered sacred by the Buddhist and Hindu religions. It’s also prized by water gardeners because it’s both beautiful and easy to grow. Lotus stalks start out in muddy soil and water, and end in sweetly fragrant white-to-pink flowers that can grow as large as 12 inches across. Although spectacular, the flowers are short-lived—appearing for only a few days followed by large ornamental seed pods. Also intriguing to observe, the plant’s canopy of waxy blue-green leaves can reach two to three feet in diameter—either lying flat on the water or rising up several feet above the water line.Lotus grows best in full sun and an aquatic feature without flowing water—which has the potential to disrupt growth and flower formation. Some lotus varieties require a massive amount of water surface to mature, while others do just fine in small water gardens. Read plant descriptions carefully when selecting a lotus for your landscape.'
  },
  {
    name: 'Water lettuce, Pistia stratiodes',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31214632%2F100861981.jpg&w=248&h=166&c=sc&poi=face&q=85',
    id: 'Sun, Part Sun',
    id2:'',
    id3: '',
    id4:'Water Plant',
    id5: ' Under 6 Inches, 6 To 12 Inches',
   id6: '',
    id7: 'Low Maintenance, Good For Containers',
    id8: '',
    id9:'This water plant is grown for its beautiful, velvety foliage that really does resemble a dense carpet of lettuce heads flowering on the water. It can be an important plant for ponds as it shades the water and gives small fish a place to hide. In cold climates, treat this tender floating plant as an annual and replace every year.Note: In warm-winter climates, water lettuce can be invasive. Check to see if the plant is banned in your area before planting it.'
  },
  
];


const Waterplant = () => {
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


export default Waterplant;
