/*jshint esversion: 6 */

import React, { Component } from 'react';
import Svg,{
  Circle,
  G,
  Rect,
} from 'react-native-svg';
import ReactNative, {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  Text
} from 'react-native';
import Button from 'apsl-react-native-button';
const timer = require('react-native-timer');
import Icon from 'react-native-vector-icons/FontAwesome';



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

  onStartBurner() {
    this.props.onStartBurner();
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
        <View style={styles.subContainer} >  
          <Text>What are you cooking?</Text>
          <View style={styles.inlineSearch} >
            <TextInput
              style={styles.searchInput}
              onChangeText={(text) => this.setState({text})} 
              value={this.state.text}
              />
            <Icon style={styles.searchIcon} name="search" />
          </View>
        </View>
        <Text style={{ marginRight: 200, marginTop: 50, fontWeight: "bold"}} >Popular</Text>
        <View style={styles.optionsTable} >
          <View>
            <Text>Breakfast</Text>
            <View style={styles.subTable} >
              <Text>Crepes</Text>
              <Text>Pancakes</Text>
              <Text>Bacon</Text>
              <Text>Eggs</Text>
            </View>
          </View>
          <View>
            <Text>Dinner</Text>
            <View style={styles.subTable} >
              <Text>Pasta</Text>
              <Text>Rice</Text>
              <Text>Stir fry</Text>
              <Text>Pork cutlet</Text>
            </View>
          </View>
        </View>
        <Text>Select Burner</Text>
        <Image source={require('../images/stovetop_off.png')} style={styles.stove} />
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
    marginTop: 100,
    marginBottom: 35
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
  },
  nextButton: {
    backgroundColor: "orange",
    width: 90
  },
  stove: {
    height: 200,
    width: 321.5,
    padding: 10
  },
  optionsTable: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  searchInput: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: "white"
  },
  inlineSearch: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: "solid",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#584FAE",
    
  },
  searchIcon: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 4,
    marginBottom: 4,
    fontSize: 32,

  },
  subTable: {

  },
  subContainer: {
    marginTop: 10
  }
});

module.exports = Range;
