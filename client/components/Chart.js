import React from 'react'
import Chart from 'chart.js'
import {Redirect} from 'react-router'

class myChart extends React.Component {
  chartRef = React.createRef()
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d')
    const myBarGraph = new Chart(myChartRef, {
      type: 'horizontalBar',
      data: {
        //Bring in data
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
      },
      options: {
        onClick: function(e) {
          let element = myBarGraph.getElementAtEvent(e)
          if (element.length) {
            element = element[0]._model.label
            element = String(element)
            this.setState({
              redirect: element
            })
          }
        }.bind(this)
      }
    })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: '/countriesandimages',
            state: {referrer: this.state.redirect}
          }}
        />
      )
    }
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    )
  }
}
export default myChart
