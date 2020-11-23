import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCountries} from '../store/drawingsAndPrints'
import {fetchImages} from '../store/images'
import CountriesChart from './CountriesChart'
import Loader from 'react-loader-spinner'

class CountriesAndImages extends Component {
  componentDidMount() {
    this.props.loadingCountries(this.props.location.state.referrer)
    this.props.loadingImages(this.props.location.state.referrer)
  }

  render() {
    const countries = this.props.countries
    let loading = true
    const names = countries.names || []
    const numbers = countries.numbers || []
    const label1 = 'temp Labelll'
    const department = this.props.location.state.referrer
    const images = this.props.images
    console.log('images', images)

    if (numbers.length > 0 && images.length > 0) {
      loading = false
    }

    if (loading) {
      return (
        <div>
          <p>Meooowww...Loading...</p>
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        </div>
      )
    }
    return (
      <div>
        <div>
          <p>Cats by Countries in {department}</p>

          <CountriesChart names={names} numbers={numbers} label={label1} />
        </div>
        <div>
          <p>Some highlights from the department.</p>
          <div className="products">
            {images.map((elm, key) => {
              return (
                <div key={key} className="product">
                  <img src={elm.primaryImage} alt="image" className="images" />
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
