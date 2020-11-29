import React from 'react'
// import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import CountriesAndImages from './components/CountriesAndImages'
import Email from './components/Email'
/**
 * COMPONENT
 */
function Routes() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/countriesandimages" component={CountriesAndImages} />
      <Route path="/saved" component={Email} />
    </Switch>
  )
}
// render={() => <CountriesAndImages dept="Drawings and Prints" />
/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))

export default Routes
