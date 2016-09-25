/*jshint esversion: 6 */

import React, { Component } from 'react';
import ReactNative, {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
  Alert
} from 'react-native';
import Button from 'apsl-react-native-button';

class Range extends Component {
  constructor(props) {
    super(props);
    
    this.setState = {
      burnerData: props.burnerData
    }; 
  }

  onPressContinue() {
    return null;
  }

  render() {
    let burner_1 = this.props.burner_1;
    return(
      <View style={styles.container}>
        <Image 
          source={require("../images/fire.png")}
          style={styles.logo} 
          />
        <Button style={styles.button} textStyle={{fontSize: 18, color: "white"}} onPress={this.props.onPressContinue}>Continue</Button>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
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
  logo: {
    marginTop: 100,
    height: 450,
    width: 350
  },
  button: {
    backgroundColor: "purple",
    marginBottom: 50,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 50
  }
});

module.exports = Range;
