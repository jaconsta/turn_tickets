import React, {Component} from 'react'

import {subscribeToMyTurn} from '../services/sockets'

class MyTurn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    subscribeToMyTurn(this.showTurn)
  }

  showTurn = () =>{
    this.setState({show: true})
  }

  render() {
    const {show} = this.state
    if (!show) return null

    return (
        <div>Your Turn</div>
    )
  }
}

export default MyTurn
