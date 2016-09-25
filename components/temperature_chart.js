/*jshint esversion: 6 */

import React, { Component } from 'react';
import ReactNative, {
  StyleSheet
} from 'react-native';
import Chart from 'react-native-chart';

export default class TemperatureChart extends Component {

  render() {
    chart = React.createElement(Chart, {
        style: styles.chart, 
        data: this.props.data,
        verticalGridStep: 5, 
        type: "line", 
        showDataPoint: true,
        dataPointRadius: 1,
        showGrid: false,
        showXAxisLabels: false,
      });

    return(
      <Chart
        style={styles.chart}
        data={this.props.data}
        verticalGridStep={5} 
        type="line" 
        showDataPoint={true}
        dataPointRadius= {1}
        showGrid={false}
        showXAxisLabels={false}
        />
    );
  }

}

const styles = StyleSheet.create({
  chart: {
    width: 350,
    height: 175,
  }
});