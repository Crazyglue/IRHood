/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class IRHood extends Component {

  constructor(props) {
    super(props);

    this.state = {lastTemperature: 0};

    setInterval(() => {
      this.fetchData();
    }, 1000);

  }
  
  fetchData() {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          console.log("HELLO!!!!");
          this.setState({
            burner: responseJson.burner_id,
            lastTemperature: responseJson.temperature
          });
        })
        .catch((error) => {
          console.error(error);
        })
  }

  render() {    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Cooking Hackathon!
        </Text>
        <Image
          source={require('./images/range.png')}
        />
        <Text style={styles.welcome}>
          {this.state.lastTemperature}
        </Text>
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
});

AppRegistry.registerComponent('IRHood', () => IRHood);
