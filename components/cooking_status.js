import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  Text
} from 'react-native';
const timer = require('react-native-timer');

export default class CookingStatus extends Component {

  onStartBurner() {
    this.props.onStartBurner();
  }
  
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
      <ReactNative.Text style={styles.welcome}>
        Last temperature received: { burner_1 }
      </ReactNative.Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
