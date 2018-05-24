import React, { Component } from 'react'
import Index from '@containers/Index'
import Login from '@containers/Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Route path="/index" component={Index}>
        </Route>
        <Route path="/login" component={Login}>
        </Route>
      </div>     
    )
  }
}

export default App