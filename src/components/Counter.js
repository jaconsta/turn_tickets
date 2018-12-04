import React, { Component } from 'react'

import {subscribeToCounter} from '../services/sockets'

class Counter extends Component {

  constructor (props) {
    super(props)
    this.state = {
      message: 'Nothing'
    }
  }

  componentDidMount() {
    subscribeToCounter(this.setMessage)
  }

  setMessage = message => {
    this.setState({message})
  }

  render() {
    return (
      <div>
        Current turn {this.state.message}
      </div>
    );
  }
}

export default Counter;
