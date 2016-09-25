/*jshint esversion: 6 */
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

import Range from './components/range';

class IRHood extends Component {
  componentWillMount() {
    this.fetchData();
  }

  constructor(props) {
    super(props);
    

    this.state = {burners: this.fetchData()};

    setInterval(() => {
      this.fetchData();
      console.log(this.fetchData());
      console.log("**************");
    }, 1000);
  }
  
  fetchData(burner_id) {
    
    fetch('http://localhost:3000/burners', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'get'
    })
      .then((response) => response.json())
        .then((responseJson) => {
          console.log("STRINGIFYING");
          
          console.log(responseJson[0]);

          this.setState({
            burners: responseJson
            
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .done();
  }

  render() {
    var { burners } = this.state;
    console.log("index.io.jsx burners: ");
    console.log(this.state.burner_1); //object... ?!
    console.log(this.state.burner_2);
    console.log(this.state.burner_3);
    console.log(this.state.burner_4);
    console.log(this.state.burner_5);

    console.log("%%%%%%%%%%%%%%%%%%%%%%%");
    var h = null;
    var burner_1 = null;

    if(this.state.burners) {
      burner_1 = this.state.burners[0].data[this.state.burners[0].data.length - 1].temperature;
    } else {
      h = 0;
      burner_1 = 0;
    }


    return (
      <Range
        burner_1={burner_1}
        />
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
