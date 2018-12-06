import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'

import TurnManager from './TurnManager'
import Assistant from './Assistant'
import Customer from './Customer'
import RoleSelector from './RoleSelector'

class App extends Component {
  constructor (props) {
      super (props)
      this.state = {
        role: null
      }
  }

  setRole = role => {
    this.setState({role})
  }

  getRoleComponent () {
    const { role } = this.state
    switch(role){
      case 'assistant':
        return Assistant
      case 'customer':
        return Customer
      default:
        return null
    }
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

    return (
      <Paper style={paperStyle}>
        <div>
          <RoleSelector roleSelected={this.setRole} role={this.state.role} />
          <TurnManager Component={this.getRoleComponent()}/>
        </div>
      </Paper>
    );
  }
}

export default App;
