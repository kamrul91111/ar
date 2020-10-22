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
        name: 'Species Rose, Rosa_ species',
        // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
        photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31224604%2F100032169.jpg&w=248&h=166&c=sc&poi=%5B275%2C275%5D&q=85',
        id: 'Sun, Part Sun',
        id2:' White, Pink, Red',
        id3: 'Chartreuse/Gold',
        id4:' Rose',
        id5: '6 To 12 Inches, 1 To 3 Feet',
       id6: 'Winter Interest, Spring Bloom, Summer Bloom, Fall Bloom',
        id7: 'Good For Containers, Fragrance, Attracts Birds, Low Maintenance',
        id8: 'Slope/Erosion Control, Deer Resistant',
        id9:'If you favor a slightly wilder look in your garden, look to the ancestors of roses you grow and enjoy for many of the same admirable qualities. Most species roses offer small blooms, and they usually appear only once a season, but the landscaping benefits make them worthwhile to include in borders and background plantings. Most species roses can tolerate extreme weather conditions and because of their colorful hips (fruit), they are good choices for attracting birds and other wildlife to the garden. The canes are often vigorous and arching. Stems may be highly colored but are almost always thorny, making large species good candidates for privacy hedging and deer-frequented areas.'
      },
  {
    name: 'Butterfly Rose, Rosa chinensis Mutabilis',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31223928%2F101034839.jpg&w=248&h=166&c=sc&poi=face&q=85',
    id: 'Sun',
    id2:'Red, Orange, Pink, Yellow',
    id3: ' Blue/Green',
    id4:'Rose, Shrub',
    id5: ' 3 To 8 Feet',
   id6: 'Spring Bloom, Summer Bloom',
    id7: 'Attracts Birds, Fragrance, Cut Flowers',
    id8: '' ,
    id9:'Although your garden visitors may not believe you, this horticultural kaleidoscope is only one rosebush -- even though it blooms in three colors and varying shades thereof all at once. New foliage and bud sheaths are a coppery-bronze, and the established foliage is clean green and shiny to boot. And adaptability? The butterfly rose is disease-resistant, shrugs off humidity, and grows taller the more shelter it is given. This arching shrub is at its best covering a wall or tall fence, with its splayed, wrinkled petals flitting in a soft breeze. Spiffy, huh? That said, one proviso -- this is most certainly not the hardiest rose in the galazy. Mutabilis is almost exclusively a southern or western beauty.Here is how the petal coloring works: At first a vivid orange, the buds open to a honey yellow, then the next day, after pollination, they become pale pink, deepening in the following day or two to nearly crimson.'
  }
 
  
];


const Roses = () => {
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


export default Roses;
