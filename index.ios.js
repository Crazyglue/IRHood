/*jshint esversion: 6 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

import Range from './components/range';
import Home from './components/home';
import Icon from 'react-native-vector-icons/FontAwesome';

class IRHood extends Component {
  
  onPressContinue(navigator) {
    navigator.push({
      name: "Range"
    });

  }

  onPressBack(navigator) {
    navigator.pop();
  }

  render() {
    

    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => {
          if(route.name == "Choose Food"){
            return (
              <Range title={route.title} />
            )
          } else if(route.name == "Home") {
            return (
              <Home title={route.title} onPressContinue={this.onPressContinue.bind(this, navigator)} />
            )
          } else if (route.name == "Range") {
            return (
              <Range onPressBack={this.onPressBack.bind(this, navigator)} />
            )
          } else {
            return (
              <Home title={route.title} onPressContinue={this.onPressContinue.bind(this, navigator)} />
            )
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                { return (<Icon name="chevron-left" />); },
              RightButton: (route, navigator, index, navState) =>
                { return (<Icon name="chevron-right" />); }
            }}
            style={{backgroundColor: '#F5FCFF'}}
          />
  }
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
