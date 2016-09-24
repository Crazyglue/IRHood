import React, { Component } from 'react';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

class Burner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      burnerId: props.burnerId,
      temperature: props.temperature,
      targetTemperature: props.targetTemperature
    } 
  }


  render() {
    console.log("RENDERING SVG...");
    return(
      <G>
        <Circle
          cx={this.props.width}
          cy="35"
          r="33"
          stroke="blue"
          strokeWidth="2"
          fill="black"
          />
        <Text x="25" y="27" stroke="white">
          {this.props.temperature}
        </Text>
      </G>
    );
  }
}

module.exports = Burner;
