import React, { Component } from 'react';

export default function asyncComponent (importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mod: null
      };
    }

    async componentDidMount() {
      const component = await importComponent();
      this.setState({
        mod: component
      });
    }

    render() {
      const Mod = this.state.mod;
      return Mod ? <Mod.default {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
