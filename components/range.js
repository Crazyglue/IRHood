/*jshint esversion: 6 */

import React, { Component } from 'react';
import Svg,{
  Circle,
  G,
  Rect,
  Text,
} from 'react-native-svg';
import ReactNative, {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import Button from 'apsl-react-native-button';
const timer = require('react-native-timer');


class Range extends Component {
  componentWillMount() {
      this.fetchData();
    }

  componentWillUnmount() {
    timer.clearInterval(this, "temperature");

  }

  constructor(props) {
    super(props);

    this.state = {burners: this.fetchData()};

    timer.setInterval(this, "temperature", () => this.fetchData, 1000);
    
  }
    
  fetchData() {
    
    fetch('http://localhost:3000/burners', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'get'
    })
      .then((response) => response.json())
        .then((responseJson) => {          
          console.log(responseJson[0]);
          if(responseJson){
            this.setState({
              burners: responseJson
            });
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .done();
  }

  onPressButton() {

  }
  

  render() {
    var h = null;
    var burner_1 = null;

    if(this.state.burners) {
      burner_1 = this.state.burners[0].data[this.state.burners[0].data.length - 1].temperature;
    } else {
      h = 0;
      burner_1 = 0;
    }

    return(
      <View style={styles.container}>
        <Button style={styles.button} onPress={this.props.onPressBack}>Back</Button>
        <Svg width="360" height="225">
          <Rect x="0" y="0" width="360" height="225" strokeWidth="2" fill="#777777"/>
        
          <G>
            <Circle
              cx="59"
              cy="166"
              r="35"
              stroke="blue"
              strokeWidth="2"
              fill="black"
              />
            <Text x="40" y="160" stroke="white">
              {burner_1 + " F"}
            </Text>
          </G>
          <G>
            <Circle
              cx="59"
              cy="78"
              r="35"
              stroke="blue"
              strokeWidth="2"
              fill="black"
              />
            <Text x="40" y="70" stroke="white">
              Burner 2
            </Text>
          </G>
          <G>
            <Circle
              cx="294"
              cy="71"
              r="35"
              stroke="blue"
              strokeWidth="2"
              fill="black"
              />
            <Text x="270" y="65" stroke="white">
              Burner 3
            </Text>
          </G>
          <G>
            <Circle
              cx="180"
              cy="91"
              r="55"
              stroke="blue"
              strokeWidth="2"
              fill="black"
              />
            <Text x="165" y="85" stroke="white">
              Temp
            </Text>
          </G>
          <G>
            <Circle
              cx="294"
              cy="166"
              r="47.5"
              stroke="blue"
              strokeWidth="2"
              fill="black"
              />
            <Text x="270" y="160" stroke="white">
              Burner 5
            </Text>
          </G>
          <Rect x="125" y="166" width="110" height="34" strokeWidth="2" fill="#D8D8D8"/>
                    
        </Svg>
        <ReactNative.Text style={styles.welcome}>
          Last temperature received: { burner_1 }
        </ReactNative.Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 200
  }
});

module.exports = Range;
