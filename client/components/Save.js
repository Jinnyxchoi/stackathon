import React, {Component} from 'react'

export default class Save extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(image) {
    let savedArr = localStorage.getItem('saved')
    if (savedArr === null) {
      savedArr = [image]
      console.log('savedArr', savedArr)
      localStorage.setItem('saved', JSON.stringify(savedArr))
    } else {
      savedArr = JSON.parse(savedArr)
      console.log('savedArr when more than 1 image/should be JSON', savedArr)
      const item = savedArr.findIndex(ea => ea.objectID === image.objectID)
      if (item === -1) {
        //if it's not already in the array,
        savedArr = [...savedArr, image]
        console.log('after findIndex', savedArr)
        localStorage.setItem('saved', JSON.stringify(savedArr))
        console.log('localstorage after we set it in store', localStorage)
      }
    }
    alert('Saved!')
  }
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.handleClick(this.props.image)
          }}
        >
          Save
        </button>
      </div>
    )
  }
}
