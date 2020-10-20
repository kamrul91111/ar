import React from 'react';
import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes, { func } from 'prop-types';
import { useTheme } from 'react-navigation';
import { gStyle, images } from '../constants';
import Touch from '../components/Touch';
import { firebase } from '../firebase/config';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: [],
      indoorPlants: []
    };
    this.readData();
  }

  // componentWillMount() {
  //   var reference = firebase.database().ref('/');
  //   reference.once('value').then(snapshot => {
  //     this.setState({plants: snapshot.val()});
  //     // console.log(snapshot.val());
  //   });
  // }

  // Array [
  //   undefined,
  //   Object {
  //     "Diseases": "random disease",
  //     "Food": "ABC manure",
  //     "ID": 1,
  //     "Instructions": "1. Dig hole, 2.Put seed",
  //     "Name": "test",
  //     "Season": "Summer",
  //     "Stores": "Bunnings",
  //     "Type": "indoor",
  //     "Water_Frequency": "3 times a day",
  //   },
  // ]

  Item({ item }) {
    return (
      <View style={styles.listItem}>
        <View style={{ alignItems: 'center', flex: 1 }}>
          {/* <Text style={{ fontWeight: 'bold', flex: 1, marginTop: 20 }}>
    {item}
    </Text> */}
          <Text>{item.Description}</Text>
        </View>
      </View>
    );
  }

  readData() {
    var reference = firebase.database().ref('/');
    reference.once('value').then(snapshot => {
      let data = [];
      for (let index = 0; index < snapshot.val().length; index++) {
        const element = snapshot.val()[index];
        // console.log("Array Object: ", element);
        if (element) {
          data.push(element);
        }
      }

      this.setState({ plants: data });
      // console.log("Snap.val(): ", snapshot.val());
      // console.log("Plants State: ", this.state.plants);
      // console.log(Object.keys(this.state.plants));
      // console.log()
    });
  }

  render() {
    console.log('FlatList Test:', this.state.plants);
    const renderItem = ({ item }) => (
      <>
        <Text>{item.ID}</Text>
        <Text>{item.Name}</Text>
        <Text>{item.Food}</Text>
        <Text>{item.Diseases}</Text>
        <Text>{item.Season}</Text>
        <Text>{item.Type}</Text>
        <Text>{item.Water_Frequency}</Text>
        <Text>{item.Stores}</Text>
      </>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Plants</Text>
        <FlatList
          style={styles.listItem}
          data={this.state.plants}
          keyExtractor={item => item.ID}
          renderItem={renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F7F7F7'
    // marginTop:60
  },
  listItem: {
    fontSize: 50,
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: 'white',
    alignSelf: 'center',
    
  },
  text: {
    marginTop: 16,
    fontSize: 34,
    textAlign: 'center',
    fontSize: 30
  }
});

// SettingsScreen.navigationOptions = ({ theme }) => {
//   return {
//     // headerLeft: () => (
//     //   <View style={{ flex: 1, paddingLeft: 16 }}>
//     //     <Text style={gStyle.text[theme]}>left</Text>
//     //   </View>
//     // ),
//     // headerRight: () => (
//     //   <View style={{ flex: 1, paddingRight: 16 }}>
//     //     <Text style={gStyle.text[theme]}>right</Text>
//     //   </View>
//     // ),
//     headerTitle: () => (
//       <View style={{ flex: 1 }}>
//       <Text>Plant List</Text>
//       </View>
//     )
//   };
// };

// SettingsScreen.propTypes = {
//   // required
//   navigation: PropTypes.object.isRequired,
//   screenProps: PropTypes.object.isRequired
// };

/*
// shoutout @notbrent: https://snack.expo.io/H105kxsG7
const shouldShowBackButton = stackRouteNavigation => {
  const parent = stackRouteNavigation.dangerouslyGetParent();
  return parent.state.routes.indexOf(stackRouteNavigation.state) > 0;
};

SettingsScreen.navigationOptions = ({ navigation }) => ({

headerLeft: !shouldShowBackButton(navigation) ? (
  <View style={{ flex: 1 }}>
    <Text>left</Text>
  </View>
) : null,
*/

// export default SettingsScreen;
