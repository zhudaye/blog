import React, { Component } from 'react'
import style from './index.less'

export default class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'zhudaye'
    }
    this.setName = this.setName.bind(this)
  }

  setName() {
    this.setState({
      name: 'zhuyeye'
    })
  }

  render () {
    return (
      <div className={style['zs-hello-name']}>
        <p>hello {this.props.name}</p>
        <p onClick={this.setName}>{this.state.name}</p>
      </div>
    )
  }
}

