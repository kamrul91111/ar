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
  {
    name: 'Beefsteak Plant, Iresine herbstii',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31230121%2F101235550.jpg&w=248&h=166&c=sc&poi=%5B275%2C275%5D&q=85',
    id: 'Part Sun, Sun',
    id2:'White',
    id3: 'Purple/Burgundy, Chartreuse/Gold',
    id4:'Annual',
    id5: ' 1 To 3 Feet',
   id6: '',
    id7: 'Low Maintenance, Good For Containers',
    id8: '',
    id9:'Beefsteak plant is the perfect choice for gardeners who prefer using vibrant foliage to jazz up the yard instead of plants going in and out of bloom—or not blooming together. This tropical annual adds bold color to garden beds, borders, and containers with its variegated stems and leaves. You can even grow it as a houseplant if you have bright light! Though it may resemble coleus, this easy-care plant is more closely related to ama…;, … amaranth, and celosia…;'
  },
  {
    name: 'Annual Toadflax, Linaria',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2016%2F02%2F31230148%2FSIP917267.jpg&w=248&h=166&c=sc&poi=face&q=85',
    id: ' Part Sun, Sun',
    id2:'Blue, Red, Orange, White, Pink',
    id3: 'Chartreuse/Gold',
    id4:'Annual',
    id5: ' Under 6 Inches, 6 To 12 Inches, 1 To 3 Feet',
   id6: 'Spring Bloom, Fall Bloom, Summer Bloom',
    id7: 'Low Maintenance, Good For Containers, Cut Flowers',
    id8: '',
    

id9: 'Easy to grow from seed or transplants, annual toadflax is a popular addition to early-season containers. Pair it with pansies for a brilliant color show. It is also spectacular as a mass planting in a garden. In cool regions, annual toadflax will bloom well into summer. In warm regions it will fade and eventually die in the heat of summer. Replant it in late summer for flowers in fall. Deer usually steer clear of annual toadflax.'
  }
  
];


const Annual = () => {
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

// const HomeScreen = ({ navigation }) => {
//   const theme = useTheme();

//   return (
//     <View style={gStyle.container[theme]}>
//       <ScrollView contentContainerStyle={gStyle.contentContainer}>
//         <Text style={gStyle.text[theme]}>Home</Text>
//         <View style={styles.listItem}>
//           <Image
//             source={{
//               uri:
//                 'https://cdn.pixabay.com/photo/2020/04/17/19/48/city-5056657_960_720.png'
//             }}
//             style={{ width: 60, height: 60, borderRadius: 30 }}
//           />

//           <TouchableOpacity
//             style={{
//               height: 50,
//               width: 50,
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}
//             onPress={() => navigation.navigate('Shop')}
//           >
//             <Text style={{ color: 'green' }}>HEllo</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.listItem}>
//           <Image
//             source={{
//               uri:
//                 'https://cdn.pixabay.com/photo/2020/04/17/19/48/city-5056657_960_720.png'
//             }}
//             style={{ width: 60, height: 60, borderRadius: 30 }}
//           />

//           <TouchableOpacity
//             style={{
//               height: 50,
//               width: 50,
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}
//             onPress={() => navigation.navigate('Shop')}
//           >
//             <Text style={{ color: 'green' }}>HEllo</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.listItem}>
//           <Image
//             source={{
//               uri:
//                 'https://cdn.pixabay.com/photo/2020/04/17/19/48/city-5056657_960_720.png'
//             }}
//             style={{ width: 60, height: 60, borderRadius: 30 }}
//           />

//           <TouchableOpacity
//             style={{
//               height: 50,
//               width: 50,
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}
//             onPress={() => navigation.navigate('Shop')}
//           >
//             <Text style={{ color: 'green' }}>HEllo</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.listItem}>
//           <Image
//             source={{
//               uri:
//                 'https://cdn.pixabay.com/photo/2020/04/17/19/48/city-5056657_960_720.png'
//             }}
//             style={{ width: 60, height: 60, borderRadius: 30 }}
//           />

//           <TouchableOpacity
//             style={{
//               height: 50,
//               width: 50,
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}
//             onPress={() => navigation.navigate('Shop')}
//           >
//             <Text style={{ color: 'green' }}>HEllo</Text>
//           </TouchableOpacity>
//         </View>

//         {/* <View style={gStyle.spacer64} />
//         <Button title="Bugs" onPress={() => navigation.navigate('Bugs')} />
//         <Button
//           title="Shop Plants"
//           onPress={() => navigation.navigate('Shop')}
//         />
//         <Button
//           title="Planting Tips"
//           onPress={() => navigation.navigate('PlantingTips')}
//         /> */}
//         {/* <TouchableOpacity
//                   onPress={() => navigation.navigate('Bugs')}
//         >
//         <Image
//         style={styles.image}
//         source={{ uri: 'https://memegenerator.net/img/instances/59916325/augmented-reality.jpg' }}
//       />
//       </TouchableOpacity> */}
//         {/* <Touch
//           onPress={() => screenProps.updateTheme('light')}
//           text="Light theme"
//         />
//         <Touch
//           onPress={() => screenProps.updateTheme('dark')}
//           text="Dark theme"
//         /> */}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     height: 200,
//     width: 200
//   }
//   // listItem: {
//   //   margin: 10,
//   //   padding: 10,
//   //   backgroundColor: '#FFF',
//   //   width: '50%',
//   //   flex: 1,
//   //   alignSelf: 'center',
//   //   flexDirection: 'row',
//   //   borderRadius: 5,
//   //   justifyContent: 'flex-start'
//   // }
// });
// // HomeScreen.navigationOptions = {
// //   headerTitleStyle: gStyle.headerTitleStyle,
// //   title: 'Home'
// // };

// // HomeScreen.propTypes = {
// //   required
// //   navigation: PropTypes.object.isRequired,
// //   screenProps: PropTypes.object.isRequired
// // };

export default Annual;
