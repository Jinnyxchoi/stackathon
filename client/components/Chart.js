import React from 'react'
import {HorizontalBar} from 'react-chartjs-2'

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
  const options = {
    onClick: function(e) {
      let element = this.getElementAtEvent(e)
      if (element.length) {
        element = element[0]._model.label
        console.log('element', element)
      }
    }
  }

  return (
    <div>
      <HorizontalBar data={data} options={options} />
    </div>
  )
}

export default Chart
