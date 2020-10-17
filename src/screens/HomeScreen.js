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

// function Item({ item }) {
//   return (
//     <View style={styles.listItem}>
//       <Image
//         source={{ uri: item.photo }}
//         style={{ width: 60, height: 60, borderRadius: 30 }}
//       />
//       <View style={{ alignItems: 'center', flex: 1 }}>
//         <Text style={{ fontWeight: 'bold', flex: 1, marginTop: 20 }}>
//           {item.name}
//         </Text>
//         <Text>{item.position}</Text>
//       </View>
//       <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
//         <Text style={{color:"green"}}>==></Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default class App extends React.Component {
//   state = {
//     data: [
//       {
//         name: 'Visualise the Plants',
//         // "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6""
//         photo:
//           'https://cdn.pixabay.com/photo/2013/07/12/19/24/seedling-154735_960_720.png'
//       },
//       {
//         name: 'View indoor plants',
//         // "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
//         photo:
//           'https://cdn.pixabay.com/photo/2015/01/03/15/06/klee-587484_960_720.png'
//       },
//       {
//         name: 'View Outdoor Plants',
//         photo:
//           'https://cdn.pixabay.com/photo/2017/01/31/22/47/nature-2027899_960_720.png'
//       },
//       {
//         name: 'View Plant Bugs',
//         photo:
//           'https://cdn.pixabay.com/photo/2017/02/01/00/18/floral-2028496_960_720.png'
//       },

//       {
//         name: 'Buy Planting Products',
//         photo:
//           'https://cdn.pixabay.com/photo/2020/04/17/19/48/city-5056657_960_720.png'
//       },

//       {
//         name: 'Planting Tips',
//         photo:
//           'https://www.uhi.ac.uk/en/t4-media/one-web/university/educational-development-unit/weekly-tip_small.png'
//       }
//     ],
//     images: [
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Power-Plant_large.jpg?v=1554827581',
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Bud_large.jpg?v=1554827597',
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Aloe_b8ca63ba-814e-4bf1-a01d-c82ad8829a26_large.jpg?v=1554827611',
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Tulips_3c2d2aa5-cca4-4f34-9d45-5d0282f84909_large.jpg?v=1554827634',
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Cactus_large.jpg?v=1554827650',
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Shrubs_large.jpg?v=1554827669',
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Rose_large.jpg?v=1554827727',
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Roots_large.jpg?v=1554827715',
//       'https://cdn.shopify.com/s/files/1/0108/9460/6436/files/Introduce_large.jpg?v=1554827696'
//     ]
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <Text style={styles.text}>Home</Text>
//         <FlatList
//           // style={{flex:1}}
//           vertical
//           data={this.state.data}
//           renderItem={({ item }) => <Item item={item} />}
//           numColumns={2}
//         />
//         <Text style={styles.text}>Plant Joke of the day!</Text>
//         <SliderBox
//           //ImageComponent={FastImage}
//           images={this.state.images}
//           sliderBoxHeight={200}
//           dotColor="#000000"
//           inactiveDotColor="#90A4AE"
//           paginationBoxVerticalPadding={20}
//           autoplay
//           circleLoop
//           resizeMethod="auto"
//           resizeMode="cover"
//           paginationBoxStyle={{
//             position: 'absolute',
//             bottom: 0,
//             padding: 0,
//             alignItems: 'center',
//             alignSelf: 'center',
//             justifyContent: 'center',
//             paddingVertical: 10
//           }}
//           dotStyle={{
//             width: 10,
//             height: 10,
//             borderRadius: 5,
//             marginHorizontal: 0,
//             padding: 0,
//             margin: 0,
//             backgroundColor: 'rgba(128, 128, 128, 0.92)'
//           }}
//           ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
//           imageLoadingColor="#2196F3"
//         />
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#F7F7F7'
//     // marginTop:60
//   },
//   listItem: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#FFF',
//     width: '50%',
//     flex: 1,
//     alignSelf: 'center',
//     flexDirection: 'row',
//     borderRadius: 5,
//     justifyContent: 'flex-start'
//   },
//   text: {
//     marginTop: 16,
//     fontSize: 34,
//     textAlign: 'center',
//     fontSize: 30
//   },
//   image: {
//     height: 300,
//     width: 350,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        <Text style={gStyle.text[theme]}>Home content area</Text>

        <View style={gStyle.spacer64} />
        <Button 
          title='Bugs'
          onPress={() => navigation.navigate('Bugs')}
        />
        <Button 
          title='Shop Plants'
          onPress={() => navigation.navigate('Shop')}
        />
        <Button 
          title='Planting Tips'
          onPress={() => navigation.navigate('PlantingTips')}
        />
        {/* <TouchableOpacity
                  onPress={() => navigation.navigate('Bugs')}
        >
        <Image
        style={styles.image}
        source={{ uri: 'https://memegenerator.net/img/instances/59916325/augmented-reality.jpg' }}
      />
      </TouchableOpacity> */}
        {/* <Touch
          onPress={() => screenProps.updateTheme('light')}
          text="Light theme"
        />
        <Touch
          onPress={() => screenProps.updateTheme('dark')}
          text="Dark theme"
        /> */}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  }
});
// HomeScreen.navigationOptions = {
//   headerTitleStyle: gStyle.headerTitleStyle,
//   title: 'Home'
// };

// HomeScreen.propTypes = {
//   required
//   navigation: PropTypes.object.isRequired,
//   screenProps: PropTypes.object.isRequired
// };

export default HomeScreen;
