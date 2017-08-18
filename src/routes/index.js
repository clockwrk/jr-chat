import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template.js'
// import Home from '../containers/Home.js'
// import Profile from '../containers/Profile.js'
import Main from '../containers/Main.js'
import ShareView from '../containers/ShareView.js'

const createRoutes = () => {
  return (
    <Route
      path='/'
      component= {Template}
    >
      <IndexRoute
        component={Main}
      />
      <Route
        path={'/share'}
        component={ShareView}
      />
      <Route
        path={'/login'}
        component={ShareView}
      />

    </Route>
  )
}

const Routes =  createRoutes()

export default Routes
