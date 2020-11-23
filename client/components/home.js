import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchDepartments} from '../store/allDepartments'

import Chart from './Chart'
import Loader from 'react-loader-spinner'

class Home extends Component {
  componentDidMount() {
    this.props.loadingDepartments()
    // this.props.loadingCountries()
  }

  render() {
    const departments = this.props.departments
    let loading = true
    const names = departments.names || []
    const numbers = departments.numbers || []
    const label1 = '# of 🐱'

    if (numbers.length >= 1) {
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
        <p>Cats by Department</p>

        <Chart names={names} numbers={numbers} label={label1} />
        {/* <p>
          Meowzers! Let's take a deeper look at the Drawings and Prints
          Department
        </p>
        <Chart names={countriesArr} numbers={countriesNum} label={label2} /> */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    departments: state.departmentsReducer
  }
}
const mapDispatch = dispatch => ({
  loadingDepartments: () => dispatch(fetchDepartments())
})
export default connect(mapState, mapDispatch)(Home)
