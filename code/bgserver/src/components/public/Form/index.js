import React, { Component } from 'react'
import style from './index.less'

function Input(props) {
  function updateInput(event) {
    props.onInputChange(event.target.value)
  }

  return (
    <div className={style['zs-form-input-box']}>
      <input type={props.type} value={props.value} onChange={updateInput} placeholder={props.label}/>
    </div>
  )
}

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handelChangeName = this.handelChangeName.bind(this)
    this.handelChangePassword = this.handelChangePassword.bind(this)
  }

  handelChangeName(value) {
    this.setState({
      username: value
    })
  }

  handelChangePassword(value) {
    this.setState({
      password: value
    })
  }

  render() {
    return (
      <div className={style['zs-form']}>
        <Input label="昵称/手机号/邮箱" type="text" value={this.state.username} onInputChange={this.handelChangeName} />
        <Input label="密码" type="password" value={this.state.password} onInputChange={this.handelChangePassword} />
        <button>登录</button>
      </div>
    )
  }
}

