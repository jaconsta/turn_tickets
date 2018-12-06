import React from 'react'

import TurnAssigned from './TurnAssigned'
import MyTurn from './MyTurn'
import RoomTurn from './RoomTurn'

import {myAssignedTurn} from '../../services/sockets'

class Client extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      turnNumber: 0
    }
  }

  componentDidMount() {
    myAssignedTurn(this.setMyTurnNumber)
  }

  setMyTurnNumber = turnNumber => {
    this.setState({turnNumber})
  }

  render () {
    const {elementStyle} = this.props

    return (
      <div>
        <TurnAssigned style={elementStyle} turnNumber={this.state.turnNumber}/>
        <MyTurn style={elementStyle}/>
        <RoomTurn style={elementStyle} turnNumber={this.state.turnNumber}/>
      </div>
    )
  }
}

export default Client
