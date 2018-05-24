import React, { Component } from 'react'
import './index.less'
class HelloWorld extends Component {
  render () {
    return (
      <div className="zs-hello-name">
        hello {this.props.name}
      </div>
    )
  }
}

export default HelloWorld
