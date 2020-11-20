import axios from 'axios'

const GET_DEPARTMENTS = 'GET_DEPARTMENTS'

export const setDepartments = (names, numbers) => {
  return {
    type: GET_DEPARTMENTS,
    departments: {
      names,
      numbers
    }
  }
}

export const fetchDepartments = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://collectionapi.metmuseum.org/public/collection/v1/departments'
      )
      const departments = res.data.departments //an array
      console.log('departments', departments)
      const names = departments.map(each => each.displayName)
      console.log('names', names)
      let numbers = []

      for (const department of departments) {
        const {data} = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${
            department.departmentId
          }&q=cat`
        )
        numbers.push(data.total)
      }

      console.log('numbers', numbers)
      dispatch(setDepartments(names, numbers))
    } catch (error) {
      console.log('there was an error in fetchDepartments', error)
    }
  }
}
const initialState = {
  departments: {
    names: [],
    numbers: []
  }
}
export default function departmentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return action.departments
    default:
      return state
  }
}
