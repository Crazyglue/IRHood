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
        <Button style={styles.button} textStyle={{fontSize: 18, color: "white", fontFamily: "Menlo"}} onPress={this.props.onPressContinue}>Continue</Button>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 35
  },
  logo: {
    marginTop: 100,
    height: 250,
    width: 187
  },
  button: {
    width: 250,
    backgroundColor: "purple",
    alignSelf: "center",
    marginTop: 25,
  }
});

module.exports = Range;
