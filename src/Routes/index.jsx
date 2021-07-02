import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import SсhedulePage from '../pages/Schedule'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/schedule" component={SсhedulePage}/>
      <Route exact path="/disciplines" component={HomePage}/>
      <Route exact path="/directory" component={HomePage}/>
      <Redirect to='/'/>
    </Switch>
  )
}
export default Routes
