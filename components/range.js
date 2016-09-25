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
  constructor(props) {
    super(props);

    this.state = {
      text: '', 
      burnerSelected: false,
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.text && nextState.burnerSelected) {
      this.props.onStartBurners(nextState.text);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.text != this.state.text || nextState.burnerSelected != this.state.burnerSelected)
      return true;
    return false;
  }

  onSelectBurner() {
    this.setState({ burnerSelected: !this.state.burnerSelected });
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.subContainer} >  
          <Text style={styles.titleText} >What are you cooking?</Text>
          <View style={styles.inlineSearch} >
            <TextInput
              style={styles.searchInput}
              onChangeText={(text) => this.setState({text})} 
              value={this.state.text}
              />
            <Icon style={styles.searchIcon} name="search" />
          </View>
        </View>
        <Text style={{ marginRight: 200, marginTop: 30, fontWeight: "bold"}} >Popular</Text>
        <View style={styles.optionsTable} >
          <View>
            <Text style={{ fontWeight: "bold" }} >Breakfast</Text>
            <View style={styles.subTable} >
              <Text style={[styles.popularText, (this.state.text == "Crepes" ? styles.highlight : null)]} onPress={() => this.setState({text: "Crepes"})}>Crepes</Text>
              <Text style={[styles.popularText, (this.state.text == "Pancakes" ? styles.highlight : null)]} onPress={() => this.setState({text: "Pancakes"})}>Pancakes</Text>
              <Text style={[styles.popularText, (this.state.text == "Bacon" ? styles.highlight : null)]} onPress={() => this.setState({text: "Bacon"})}>Bacon</Text>
              <Text style={[styles.popularText, (this.state.text == "Eggs" ? styles.highlight : null)]} onPress={() => this.setState({text: "Eggs"})}>Eggs</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>Dinner</Text>
            <View style={styles.subTable} >
              <Text style={[styles.popularText, (this.state.text == "Pasta" ? styles.highlight : null)]} onPress={() => this.setState({text: "Pasta"})}>Pasta</Text>
              <Text style={[styles.popularText, (this.state.text == "Rice" ? styles.highlight : null)]} onPress={() => this.setState({text: "Rice"})}>Rice</Text>
              <Text style={[styles.popularText, (this.state.text == "Stir fry" ? styles.highlight : null)]} onPress={() => this.setState({text: "Stir fry"})}>Stir fry</Text>
              <Text style={[styles.popularText, (this.state.text == "Pork cutlet" ? styles.highlight : null)]} onPress={() => this.setState({text: "Pork cutlet"})}>Pork cutlet</Text>
            </View>
          </View>
        </View>
        <TouchableHighlight onPress={this.onSelectBurner.bind(this)} >
          <View style={{ marginBottom: 50 }} >
            <Text style={styles.titleText} >Select Burner</Text>
            <Image source={this.state.burnerSelected ? require('../images/stovetop_cold.png') : require('../images/stovetop_off.png')} style={styles.stove} />
          </View>
        </TouchableHighlight>
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
    marginTop: 35,
    marginBottom: 35
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  stove: {
    height: 200,
    width: 321.5,
    padding: 10
  },
  optionsTable: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 300
  },
  searchInput: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 8,
  },
  inlineSearch: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: "#584FAE",
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 9,
    marginBottom: 9,
    fontSize: 22,
    color: "#FBF2DC"

  },
  subTable: {
    justifyContent: "space-between"
  },
  subContainer: {
    marginTop: 25
  },
  popularText: {
    fontStyle: "italic"
  },
  titleText: {
    fontSize: 22,
    color: "#355821",
    marginBottom: 10,
    alignSelf: "center"
  },
  highlight: {
    backgroundColor: "#777777",

  }
});

module.exports = Range;
