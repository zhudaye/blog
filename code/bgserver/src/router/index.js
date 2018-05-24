import React, { Component } from 'react'
import App from '@containers/App'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default function() {
  return (
    <Router>
        <div>
          <div>
            <ul>
              <li><Link to='/index'>Home</Link></li>
              <li><Link to='/login'>login</Link></li>
            </ul>
          </div>
          <Route path="/" component={App}>
          </Route>
        </div>
    </Router>
  )
}

