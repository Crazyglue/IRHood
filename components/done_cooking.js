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
import Button from 'apsl-react-native-button';
import TemperatureChart from './temperature_chart';

export default class DoneCooking extends Component {

  constructor(props) {
    super(props);

    this.state = { 
    };

    
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Awww yeah, congrats!</Text>
        <Button onPress={this.props.CookAgain}>Again?</Button>
        <TemperatureChart data={this.props.data} />
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
});
