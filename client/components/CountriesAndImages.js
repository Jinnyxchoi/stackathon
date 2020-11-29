import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCountries} from '../store/drawingsAndPrints'
import {fetchImages} from '../store/images'
import CountriesChart from './CountriesChart'
import Loader from 'react-loader-spinner'
import './images.css'
import {Link} from 'react-router-dom'
import Save from './Save'
class CountriesAndImages extends Component {
  componentDidMount() {
    this.props.loadingCountries(this.props.location.state.referrer)
    this.props.loadingImages(this.props.location.state.referrer)
  }
  // handleClick(e){
  //   e.preventDefault();
  // }
  render() {
    const countries = this.props.countries
    let loading = true
    const names = countries.names || []
    const numbers = countries.numbers || []
    const label1 = 'temp Labelll'
    const department = this.props.location.state.referrer
    const images = this.props.images

    if (numbers.length > 0 && images.length > 0) {
      loading = false
    }

    if (loading) {
      return (
        <div className="loader">
          <p>Meooowww...Loading...</p>
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </div>
      )
    }
    return (
      <div id="imagesPage">
        <div>
          <p id="bold">Cats by Countries in {department}</p>

          <CountriesChart names={names} numbers={numbers} label={label1} />
        </div>
        <div>
          <p id="bold">Some highlights in {department}:</p>
          <div className="images">
            {images.map((elm, key) => {
              return (
                <div key={key} className="image">
                  <div id="title">
                    <p>Title: {elm.title}</p>
                    <p>
                      Artist:{' '}
                      {elm.artistDisplayName.length === 0
                        ? 'N/A'
                        : elm.artistDisplayName}
                    </p>
                  </div>
                  <img src={elm.primaryImage} alt="image" className="images" />
                  <Save image={elm} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    countries: state.countriesReducer,
    images: state.imagesReducer
  }
}
const mapDispatch = dispatch => ({
  loadingCountries: department => dispatch(fetchCountries(department)),
  loadingImages: department => dispatch(fetchImages(department))
})
export default connect(mapState, mapDispatch)(CountriesAndImages)
