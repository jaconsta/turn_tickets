import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { isLoggedIn } from './../utils/auth'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const isLoggedIn = () => false

export default ({component: Component, ...params}) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          Trimmer
        </Typography>
      </Toolbar>
    </AppBar>

    <Route
      {...params}
      render = {
        props => (
          !isLoggedIn() ? (<Component {...props} />) : ( <Redirect to="/"/> )
        )
      }
    />
  </div>
)
