import React, {Component} from 'react'

import Chart from 'chart.js'

export default class CountriesChart extends Component {
  chartRef = React.createRef()
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d')

    const myBarGraph = new Chart(myChartRef, {
      type: 'horizontalBar',
      data: {
        labels: this.props.names,
        datasets: [
          {
            label: this.props.label,
            data: this.props.numbers,
            fill: true,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)'
          }
        ]
      }
    })
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    )
  }
}
