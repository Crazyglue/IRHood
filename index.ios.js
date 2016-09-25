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
import DoneCooking from './components/done_cooking';
import CookingStatus from './components/cooking_status';
import Icon from 'react-native-vector-icons/FontAwesome';

class IRHood extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      chartData: null
    };
  }
  
  onPressContinue(navigator) {
    navigator.push({
      name: "Range"
    });
  }

  onStartBurners(navigator, text) {
    this.setState({text: text});
    navigator.push({
      name: "Cooking Status"
    });
  }

  onPressBack(navigator) {
    navigator.pop();
  }

  onCookingDone(navigator, chartData) {
    navigator.push({
      name: "Done Cooking"
    });

    this.setState({
      chartData: chartData
    });
  }

  reset(navigator) {
    navigator.pop();
    navigator.pop();
  }

  render() {
    return (
      <Image source={require("./images/fire_background.png")} style={styles.bgImage}>
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
        renderScene={(route, navigator) => {
          if(route.name == "Home") {
            return (
              <Home title={route.title} onPressContinue={this.onPressContinue.bind(this, navigator)} />
            )
          } else if (route.name == "Range") {
            return (
              <Range onPressBack={this.onPressBack.bind(this, navigator)} onStartBurners={this.onStartBurners.bind(this, navigator)} />
            )
          } else if (route.name == "Cooking Status") {
            return (
              <CookingStatus text={this.state.text} onCookingDone={this.onCookingDone.bind(this, navigator)} />
            )
          } else if (route.name == "Done Cooking") {
            return (
              <DoneCooking data={this.state.chartData} cookAgain={this.reset.bind(this, navigator)} />
            )
          } else {
            return (
              <Home title={route.title} onPressContinue={this.onPressContinue.bind(this, navigator)} />
            )
          }
        }}
      />
      </Image>
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
  navButton: {
    fontSize: 28,
    margin: 10
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
    flex: 1,
    width: null,
    height: null
  }
});

AppRegistry.registerComponent('IRHood', () => IRHood);
