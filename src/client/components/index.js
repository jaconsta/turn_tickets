import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

import Layout from './Layout'
import UnauthenticatedRoute from './UnauthenticatedRoute'
import Login from './Login'
import Register from './Register'
import TurnManager from './TurnManager'
import Agent from './Agent'
import Customer from './Customer'
import RoleSelector from './RoleSelector'

const Dashboard = props => {
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
    <div>
      <Layout history={props.history}/>
      <Paper style={paperStyle}>
        <div>
        </div>
      </Paper>
    </div>
  )
}

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

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <UnauthenticatedRoute path="/login" component={Login} />
          <UnauthenticatedRoute path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
