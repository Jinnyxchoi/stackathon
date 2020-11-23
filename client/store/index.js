import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import departmentsReducer from './allDepartments'
import countriesReducer from './drawingsAndPrints'
import imagesReducer from './images'

const reducer = combineReducers({
  departmentsReducer,
  countriesReducer,
  imagesReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
