import React from 'react'
import { Home, Login }  from '@containers'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export default function() {
  return (
    <Router>
      <Switch>
        <Route path="/index" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Redirect path="/" to={{pathname: '/index'}} />
      </Switch>
    </Router>
  )
}

