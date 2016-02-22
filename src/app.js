'use strict'

import Parse from './parse'

import React from 'react'
import { render } from 'react-dom'

import configureStore from './store'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Root from './components/Root'
import PropertyListContainer from './containers/PropertyListContainer'
import BuildingListContainer from './containers/BuildingListContainer'
import UnitListContainer from './containers/UnitListContainer'
import LoginContainer from './containers/LoginContainer'
import CreateTenantContainer from './containers/CreateTenantContainer'

import {fetchProperties} from './actions'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

function requireAuth(nextState, replace) {
  if (!Parse.User.current()) {
    replace('/login')
  }
}

store.dispatch(fetchProperties())

const NotFound = React.createClass({
  render() {
    return (<div>Not Found</div>)
  }
})

render((
  <Provider store={store}>
    <div>
    <Router history={history}>
      <Route component={Root}>
        <Route path="/" component={PropertyListContainer} onEnter={requireAuth}>
          <Route path=":propertyId/buildings" component={BuildingListContainer}>
            <Route path=":buildingId/units" component={UnitListContainer} />
          </Route>
        </Route>
        <Route path="/login" component={LoginContainer} />
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
    </div>
  </Provider>
  ),document.getElementById('app'))
