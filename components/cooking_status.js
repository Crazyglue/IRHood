/*jshint esversion: 6 */

import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  Text,
} from 'react-native';
const timer = require('react-native-timer');
import Chart from 'react-native-chart';
const camelCase = require('camelcase');
import Food from '../data/food.json';
import Button from 'apsl-react-native-button';

export default class CookingStatus extends Component {

  onStartBurner() {
    this.props.onStartBurner();
  }
  
  componentWillMount() {
      // this.fetchLatestData();
    }

  // componentWillUpdate(nextProps, nextState) {
  //   if(this.state.flipTemp < nextState.latestTemp)
  //     this.setState({ needsFlip: true });
      
  //   if(this.state.doneTemp < nextState.latestTemp)
  //     this.setState({done: true});
  // }

  componentWillUnmount() {
    timer.clearInterval(this, "temperature");
  }

  constructor(props) {
    super(props);

    var { flipTemp, doneTemp } = Food[camelCase(props.text)];

    this.state = { 
      burnerData: [],
      flipTemp: flipTemp,
      doneTemp: doneTemp,
      flipped: false,
      done: false,
      latestTemp: 0
    };

    timer.setInterval(this, "temperature", () => this.fetchLatestData(), 1000);
    
  }

  fetchLatestData() {
    fetch('http://localhost:3000/burners/1/latest', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'get'
    })
      .then((response) => response.json())
        .then((responseJson) => {          
          if(responseJson){
            burnerData = this.state.burnerData || [];
            data = {
              temperature: responseJson.temperature * Math.random()
            }
            burnerData.push(data);

            this.setState({
              burnerData: burnerData,
              latestTemp: data.temperature
            });
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .done();
  }

  onFlipped() {
    this.setState({
      flipped: true
    });
  }

  render() {
    var latestTemperature = null;
    var temperatureText = '';
    var heatTemplate = 'Burner 3 is on and ';
    var stove = null;
    var chartData = [];
    var headerText = "";     

    if(this.state.burnerData.length > 0) {
      //latestTemperature = this.state.burnerData[this.state.burnerData.length - 1].temperature;
      temperatureIsWarm = this.state.latestTemp > 50;
      temperatureText = heatTemplate + (temperatureIsWarm ? "warming up" : "HOT")
      stove = React.createElement(Image, {style: styles.image, source: require('../images/stovetop_hot.png')});

      chartData = []
      for (var index = 0; index < this.state.burnerData.length; index++) {
        chartData.push(
          [
            index,            
            this.state.burnerData[index].temperature
          ]
        );
      }

      chart = React.createElement(Chart, {
        style: styles.chart, 
        data: chartData,
        verticalGridStep: 5, 
        type: "line", 
        showDataPoint: true,
        dataPointRadius: 1,
        showGrid: false,
        showXAxisLabels: false,
      });
    } else {
      //latestTemperature = 0;
      temperatureText = "";
      stove = React.createElement(Image, {style: styles.image, source: require('../images/stovetop_cold.png')});
      chart = null;
    }

    if(this.state.flipped) {
      headerText = "Your " + this.props.text + " will be done soon!";
    } else {
      headerText = this.state.latestTemp > this.state.flipTemp ? ("Flip your " + this.props.text + "!") : "What's cooking...";
    }
    var button = React.createElement(Button, { onPress: () => this.onFlipped() }, "Flipped!");

    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>
            {headerText}
          </Text>
          <Text style={styles.foodText}>
            {this.state.flipped ? null : this.props.text}
          </Text>
        </View>
        <View>
          <Text>
            {temperatureText}
          </Text>
          {stove}
        </View>
        <View>
          <Text>Current temp: {this.state.latestTemp} °C</Text>
          <Text>Temp to flip: {this.state.flipTemp}</Text>
          <Text>Temp when done: {this.state.doneTemp}</Text>
        </View>
        <View style={{ height: 175 }}>
          { this.state.latestTemp > this.state.flipTemp && !this.state.flipped ? button : chart}
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 35,
    marginBottom: 35
  },
  welcome: {
    marginTop: 50
  },
  titleText: {
    fontSize: 22,
    color: "#355821",
    marginBottom: 10,
    alignSelf: "center"
  },
  foodText: {
    fontSize: 22,
    fontStyle: "italic",
    color: "#9E54A1",
  },
  image: {
    height: 200,
    width: 321.5,
    padding: 10,
    marginTop: 10
  },
  chart: {
    width: 350,
    height: 175,
  }
});
