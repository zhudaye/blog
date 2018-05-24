import React, { Component } from 'react'
import HelloWorld from '@components/public/HelloWorld'

class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <HelloWorld />
      </div>     
    )
  }
}

export default Index