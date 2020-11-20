import React from 'react'
import {Line} from 'react-chartjs-2'

function Chart(props) {
  const data = {
    labels: props.names,
    datasets: [
      {
        label: props.label,
        data: props.numbers,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)'
      }
    ]
  }
  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default Chart
