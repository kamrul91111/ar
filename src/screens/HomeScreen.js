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
    name: 'Visualise the Plants',
    // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
    photo: require('../assets/images/visual.png'),
    id: 'Ar'
  },
  {
    name: 'View indoor plants',
    // "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
    photo: require('../assets/images/indoor.png'),
    id: 'IndoorPlants'
  },
  {
    name: 'View Outdoor Plants',
    photo: require('../assets/images/outdoor.png'),
    id: 'PlantList'
  },
  {
    name: 'View Plant Bugs',
    photo: require('../assets/images/pest.png'),
    id: 'Bugs'
  },

  {
    name: 'Buy Planting Products',
    photo: require('../assets/images/shop.png'),
    id: 'Shop'
  },

  {
    name: 'Planting Tips',
    photo: require('../assets/images/tips.png'),
    id: 'PlantingTips'
  }
];

const IMG = [
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Power-Plant_large.jpg?v=1554827581',
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Bud_large.jpg?v=1554827597',
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Aloe_b8ca63ba-814e-4bf1-a01d-c82ad8829a26_large.jpg?v=1554827611',
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Tulips_3c2d2aa5-cca4-4f34-9d45-5d0282f84909_large.jpg?v=1554827634',
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Cactus_large.jpg?v=1554827650',
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Shrubs_large.jpg?v=1554827669',
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Rose_large.jpg?v=1554827727',
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Roots_large.jpg?v=1554827715',
  'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Introduce_large.jpg?v=1554827696'
];

const HomeScreen = ({ navigation }) => {
  function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => navigation.navigate(item.id)}>
          <Image source={item.photo} style={{ width: 100, height: 100 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(item.id)}>
          <Text style={styles.textitem}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        vertical
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        numColumns={2}
      />
      <Text style={styles.text}>Plant Jokes of the day!</Text>
      <SliderBox
        //ImageComponent={FastImage}
        images={IMG}
        sliderBoxHeight={200}
        dotColor="#000000"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod="auto"
        resizeMode="cover"
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: 'rgba(128, 128, 128, 0.92)'
        }}
        ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
        imageLoadingColor="#2196F3"
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

export default HomeScreen;
