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
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DoneCooking extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.centerView}>
          <Text style={styles.subText}>Awww yeah, congrats!</Text>
          <Button style={styles.button} textStyle={{color: "white"}} onPress={this.props.CookAgain}>Again?</Button>
        </View>
        <View>
          <TemperatureChart data={this.props.data} />
        </View>
        <View style={styles.centerView}>
          <Text style={styles.subText}>Share your #fIRe meal</Text>
          <Button style={styles.button} onPress={this.props.CookAgain}>
            <Icon color="white" style={styles.logo} name="camera" />
          </Button>
        </View>
        <View style={styles.centerView}>
          <Text style={styles.subText}>Did you love it?</Text>
          <Button style={styles.button} textStyle={{color: "white"}} onPress={this.props.CookAgain}>
            Save to favs
          </Button>
        </View>
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
  button: {
    width: 250,
    backgroundColor: "purple",
    justifyContent: "space-around",
  },
  logo: {
    fontSize: 28,
    marginTop: 7
  },
  titleText: {
    fontSize: 22,
    color: "#355821",
    marginBottom: 10,
    alignSelf: "center"
  },
  subText: {
    color: "#BB88BD",
    alignSelf: "center"
  },
  centerView: {
    alignSelf: "center",
  }
});
