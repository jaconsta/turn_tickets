import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'

import Counter from './Counter'
import AddOneButton from './AddOneButton'
import MyTurn from './MyTurn'
import RoomTurn from './RoomTurn'
import TurnAssigned from './TurnAssigned'

import {myAssignedTurn} from '../services/sockets'

class App extends Component {
  constructor (props) {
      super (props)
      this.state = {
        turnNumber: null
      }
  }

  componentDidMount() {
    myAssignedTurn(this.setMyTurnNumber)
  }

  setMyTurnNumber = turnNumber => {
    this.setState({turnNumber})
  }

  render() {
    const paperStyle = {
      marginTop: '30px',
      paddingTop: '10px',
      paddingBottom: '10px',
      width: '500px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const elementStyle = {
      maxWidth: '60%'
    }

    return (
      <Paper style={paperStyle}>
        <div>
          <TurnAssigned style={elementStyle} turnNumber={this.state.turnNumber}/>
          <Counter style={elementStyle}/>
          <RoomTurn style={elementStyle} turnNumber={this.state.turnNumber}/>
          <AddOneButton style={elementStyle}/>
          <MyTurn style={elementStyle}/>
        </div>
      </Paper>
    );
  }
}

export default App;
