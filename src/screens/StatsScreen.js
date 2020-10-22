import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Weather from '../components/Weather'

const API_KEY ="5674703621c18e2a68c7c199061d51ca"

export default class StatsScreen extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: 0,
    error: null,
    feelslike:0,
    d1min:0,
    d1max:0,
    d1pop:0,
    d1d:null,
    d2min:0,
    d2max:0,
    d2d:null,
    d2pop:0,
    d3min:0,
    d3max:0,
    d3pop:0,
    d3d:null,
     d4min:0,
    d4max:0,
    d4pop:0,
    d4d:null,
    d5min:0,
    d5max:0,
    d5pop:0,
    d1d:null,
     d5min:0,
    d6max:0,
    d6pop:0,
    d6d:null,
    d7min:0,
    d7max:0,
    d7pop:0,
    d7d:null

  };

  componentDidMount() {
    this.getWeather();

  }

  getWeather() {

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly&appid=5674703621c18e2a68c7c199061d51ca&units=metric`)
    .then(response => response.json().then(data => data))
    .then(result => {

console.log(result.daily[0].temp.min)
console.log(result.daily[0].weather[0].description)
this.setState({

  temperature:result.current.temp,
  feelslike:result.current.feels_like,
  d1min:result.daily[0].temp.min,
  d1max:result.daily[0].temp.max,
  d1pop:result.daily[0].pop,
  d1d:result.daily[0].weather[0].description,
  d2min:result.daily[1].temp.min,
  d2max:result.daily[1].temp.max,
  d2pop:result.daily[1].pop,
  d2d:result.daily[1].weather[0].description,
  d3min:result.daily[2].temp.min,
  d3max:result.daily[2].temp.max,
  d3pop:result.daily[2].pop,
  d3d:result.daily[2].weather[0].description,
  d4min:result.daily[3].temp.min,
  d4max:result.daily[3].temp.max,
  d4pop:result.daily[3].pop,
  d4d:result.daily[3].weather[0].description,
  d5min:result.daily[4].temp.min,
  d5max:result.daily[4].temp.max,
  d5pop:result.daily[4].pop,
  d5d:result.daily[4].weather[0].description,
  d6min:result.daily[5].temp.min,
  d6max:result.daily[5].temp.max,
  d6pop:result.daily[5].pop,
  d6d:result.daily[5].weather[0].description,
  d7min:result.daily[6].temp.min,
  d7max:result.daily[6].temp.max,
  d7pop:result.daily[6].pop,
  d7d:result.daily[6].weather[0].description,
  
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

  //`http://api.openweathermap.org/data/2.5/weather?lat=33.8&lon=151.19&APPID=5674703621c18e2a68c7c199061d51ca&units=metric`

  render() {
   
    return (
      <ScrollView style={styles.container}>
      <View style={styles.listItem}>
        <Text style={styles.tempTexth}>Weather for Ultimo</Text>

        <Text style={styles.tempText}>Temperature: {this.state.temperature}˚</Text>
        <Text style={styles.subtitle}>Feels like :{this.state.feelslike} </Text>
      </View>
      <View >
        
        <Text style = {{fontWeight: "bold",fontSize:40}}>{"\n"} Seven Days Forecast {"\n"}
</Text> 
        <View style={styles.listItem}>
       
        <Text style={styles.text}>
            <Text style = {{fontWeight: "bold"}}>{"\n"}Day 1: {"\n"}
</Text> 
           <Text>{"\n"}Minimun Temperature: {this.state.d1min}˚ </Text> 
           <Text>{"\n"}
Maximum Temperature: {this.state.d1max}˚ </Text>
          < Text>{"\n"}Chance of Rain:  {this.state.d1pop}  </Text> 
          < Text>{"\n"}Day will have:  {this.state.d1d} </Text> 
          <Text style = {{fontWeight:  "bold"}}>{"\n"}{"\n"}{"\n"}Day 2: {"\n"}
</Text> 
           <Text>{"\n"}Minimun Temperature:  {this.state.d2min}˚ </Text> 
           <Text>{"\n"}
Maximum Temperature: {this.state.d2max}˚ </Text>
          < Text>{"\n"}Chance of Rain:  {this.state.d2pop}  </Text> 
          < Text>{"\n"}Day will have:  { this.state.d2d} </Text> 
          <Text style = {{fontWeight:  "bold"}}>{"\n"}{"\n"}{"\n"}Day 3: {"\n"}
</Text> 
           <Text>{"\n"}Minimun Temperature:  {this.state.d3min}˚ </Text> 
           <Text>{"\n"}
Maximum Temperature: {this.state.d3max}˚ </Text>
          < Text>{"\n"}Chance of Rain:  {this.state.d3pop}  </Text> 
          < Text>{"\n"}Day will have:  { this.state.d3d} </Text> 
          <Text style = {{fontWeight:  "bold"}}>{"\n"}{"\n"}{"\n"}Day 4: {"\n"}
</Text> 
           <Text>{"\n"}Minimun Temperature:  {this.state.d4min}˚ </Text> 
           <Text>{"\n"}
Maximum Temperature: {this.state.d4max}˚ </Text>
          < Text>{"\n"}Chance of Rain:  {this.state.d4pop}  </Text> 
          < Text>{"\n"}Day will have:  { this.state.d4d} </Text> 
          <Text style = {{fontWeight:  "bold"}}>{"\n"}{"\n"}{"\n"}Day 5: {"\n"}
</Text> 
           <Text>{"\n"}Minimun Temperature:  {this.state.d5min}˚ </Text> 
           <Text>{"\n"}
Maximum Temperature: {this.state.d5max}˚ </Text>
          < Text>{"\n"}Chance of Rain:  {this.state.d5pop}  </Text> 
          < Text>{"\n"}Day will have:  { this.state.d5d} </Text> 
          <Text style = {{fontWeight:  "bold"}}>{"\n"}{"\n"}{"\n"}Day 6: {"\n"}
</Text> 
           <Text>{"\n"}Minimun Temperature:  {this.state.d6min}˚ </Text> 
           <Text>{"\n"}
Maximum Temperature: {this.state.d2max}˚ </Text>
          < Text>{"\n"}Chance of Rain:  {this.state.d6pop}  </Text> 
          < Text>{"\n"}Day will have:  { this.state.d6d} </Text> 
          <Text style = {{fontWeight:  "bold"}}>{"\n"}{"\n"}{"\n"}Day 7: {"\n"}
</Text> 
           <Text>{"\n"}Minimun Temperature:  {this.state.d7min}˚ </Text> 
           <Text>{"\n"}
Maximum Temperature: {this.state.d7max}˚ </Text>
          < Text>{"\n"}Chance of Rain:  {this.state.d7pop}  </Text> 
          < Text>{"\n"}Day will have:  { this.state.d7d} </Text> 
    
          </Text>
          </View>
          </View>
          </ScrollView>
    )

}}

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
  tempTexth: {
    fontSize: 40,
    color: '#000000'
  },
  tempText: {
    fontSize: 30,
    color: '#000000'
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
    color: '#000000'
  }
});
