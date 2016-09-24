/*jshint esversion: 6 */

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

class Range extends Component {
  constructor(props) {
    super(props);
    
    // console.log("~~~~~~~~~~~~");
    // console.log(props.burnerData);

    this.setState = {
      burnerData: props.burnerData
    }; 
  }

  render() {
    // console.log("RENDERING SVG...");
    // console.log(this.props.burnerData);
    let burner_1 = this.props.burner_1;
    return(
      <Svg width="360" height="225">
        <Rect x="0" y="0" width="360" height="225" strokeWidth="2" fill="#777777"/>
      
        <G>
          <Circle
            cx="59"
            cy="166"
            r="35"
            stroke="blue"
            strokeWidth="2"
            fill="black"
            />
          <Text x="40" y="160" stroke="white">
            {burner_1 + " F"}
          </Text>
        </G>
        <G>
          <Circle
            cx="59"
            cy="78"
            r="35"
            stroke="blue"
            strokeWidth="2"
            fill="black"
            />
          <Text x="40" y="70" stroke="white">
            Burner 2
          </Text>
        </G>
        <G>
          <Circle
            cx="294"
            cy="71"
            r="35"
            stroke="blue"
            strokeWidth="2"
            fill="black"
            />
          <Text x="270" y="65" stroke="white">
            Burner 3
          </Text>
        </G>
        <G>
          <Circle
            cx="180"
            cy="91"
            r="55"
            stroke="blue"
            strokeWidth="2"
            fill="black"
            />
          <Text x="165" y="85" stroke="white">
            Temp
          </Text>
        </G>
        <G>
          <Circle
            cx="294"
            cy="166"
            r="47.5"
            stroke="blue"
            strokeWidth="2"
            fill="black"
            />
          <Text x="270" y="160" stroke="white">
            Burner 5
          </Text>
        </G>
        <Rect x="125" y="166" width="110" height="34" strokeWidth="2" fill="#D8D8D8"/>
                  
      </Svg>
    );
  }
}

module.exports = Range;
