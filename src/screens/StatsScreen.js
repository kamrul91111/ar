import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from '../components/Weather'

const API_KEY ="5674703621c18e2a68c7c199061d51ca"

export default class StatsScreen extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: 0,
    error: null
  };

  componentDidMount() {
    this.getWeather();

  }

  getWeather() {

  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=30&lon=50&APPID=5674703621c18e2a68c7c199061d51ca&units=metric`)
    .then(response => response.json().then(data => data))
    .then(result => {

console.log(result.main.temp)
console.log(result.weather)
this.setState({

  temperature:result.main.temp,
  humidity:result.main.humidity,
  weatherCondition: result.weather.id

});
    }/* Do whatever you want with this result */)
    // .catch(error => /* Do something if error occurs */);
    //   )
    // .catch(error => /* Do something if error occurs */);
//     fetch(`http://api.openweathermap.org/data/2.5/weather?lat=30&lon=50&APPID=5674703621c18e2a68c7c199061d51ca&units=metric`
//     ).then(res => {
//      return res.json();
// }).then(function(res) {
//     console.log(res.main.temp)

//     this.setState({
//       temperature:json.main.temp
//     });
//     console.log(res.main.temp)


  }
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?lat=30&lon=50&APPID=5674703621c18e2a68c7c199061d51ca&units=metric`
  //   ).then(res => res.json)
  //     .then(res => {
  //       console.log(res.json)
  //       this.setState({
  //         temperature: json.main.temp,
  //         humidity: json.main.humidity,

  //     });
  //   });
  // }

  //`http://api.openweathermap.org/data/2.5/weather?lat=30&lon=50&APPID=5674703621c18e2a68c7c199061d51ca&units=metric`

  render() {
   
    return (
      <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.tempText}>{this.state.temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.subtitle}>Plants are  going to be thirtsty </Text>
      </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});
