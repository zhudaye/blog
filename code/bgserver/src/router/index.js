import React, { Component } from 'react'
import Index from '@containers/Index'
import Login from '@containers/Login'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

export default function() {
  return (
    <Router>
      <Switch>
        <Route path="/index" exact component={Index}/>
        <Route path="/login" component={Login}/>
        <Redirect path="/" to={{pathname: '/index'}} />
      </Switch>
    </Router>
  )
}

