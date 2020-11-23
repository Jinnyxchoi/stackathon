import axios from 'axios'

const GET_COUNTRIES = 'GET_COUNTRIES'

export const setCountries = (names, numbers) => {
  return {
    type: GET_COUNTRIES,
    countries: {
      names,
      numbers
    }
  }
}

export const fetchCountries = department => {
  return async dispatch => {
    try {
      let countries
      let id
      if (department === 'Drawings and Prints') {
        countries = [
          'France',
          'Germany',
          'Italy',
          'Netherlands',
          'Bohemia',
          'United Kingdom'
        ]
        id = 9 //for now I'm hardcoding the ID but i could pass this as a part of the alldepartments state
      } else if (department === 'Asian Art') {
        countries = [
          'Korea',
          'Japan',
          'India',
          'Pakistan',
          'China',
          'Afghanistan'
        ]
        id = 6
      } else if (department === 'European Paintings') {
        countries = [
          'United Kingdom',
          'France',
          'Italy',
          'Germany',
          'Netherlands',
          'Spain'
        ]
        id = 11
      }

      countries.sort()
      let numbers = []

      for (const country of countries) {
        const {data} = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&geoLocation=${country}&q=cat`
        )
        numbers.push(data.total)
      }
      console.log('numbers', numbers)
      dispatch(setCountries(countries, numbers))
    } catch (error) {
      console.log('there was an error in fetchCountries', error)
    }
  }
}
const initialState = {
  countries: {
    names: [],
    numbers: []
  }
}
export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return action.countries
    default:
      return state
  }
}
