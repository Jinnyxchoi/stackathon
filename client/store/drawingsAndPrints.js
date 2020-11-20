import axios from 'axios'

const GET_DRAWINGS = 'GET_DRAWINGS'

export const setDrawings = (names, numbers) => {
  return {
    type: GET_DRAWINGS,
    places: {
      names,
      numbers
    }
  }
}

export const fetchDrawings = () => {
  return async dispatch => {
    try {
      const countries = [
        'France',
        'Germany',
        'Italy',
        'Netherlands',
        'Bohemia',
        'United Kingdom'
      ]
      countries.sort()
      let numbers = []

      for (const country of countries) {
        const {data} = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=9&geoLocation=${country}&q=cat`
        )
        numbers.push(data.total)
      }
      console.log('numbers', numbers)
      dispatch(setDrawings(countries, numbers))
    } catch (error) {
      console.log('there was an error in fetchDrawings', error)
    }
  }
}
const initialState = {
  countries: {
    names: [],
    numbers: []
  }
}
export default function drawingsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRAWINGS:
      return action.places
    default:
      return state
  }
}
