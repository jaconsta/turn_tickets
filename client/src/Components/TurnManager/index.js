import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import JoinChannel from 'Components/Home/JoinChannel'
import JoinChannelDialog from 'Components/Home/JoinChannelDialog'
import CreateChannel from 'Components/Home/CreateChannel'
import TurnCounter from 'Components/TurnRoom/TurnCounter'
import TurnDisplay from 'Components/TurnRoom/TurnDisplay'
import PersonDetails from 'Components/TurnAdmin/PersonDetails'
import AdminNext from 'Components/TurnAdmin/AdminNext'
import {
  RootDiv,
  TopPaper,
  BottomPaper,
} from 'Components/Shared/styled'
import { TurnContextProvider } from './TurnContext'

const personDetailsInitial = {
  name: null,
  email: null,
  details: null,
}

const TurnManager = () => {
  const [ personDetails, setPersonDetails ] = useState(personDetailsInitial)
  const [ currentTurn, setCurrentTurn ] = useState(0)

  const value = {
    currentTurn,
    personDetails,
    setPersonDetails,
    setCurrentTurn,
  }

  return (
    <TurnContextProvider value={value}>
      <RootDiv>
        <TopPaper>
          <Switch>
            <Route path='/room-admin' component={PersonDetails} />
            <Route path='/join/:roomId' component={JoinChannelDialog} />
            <Route path='/room/:roomId' component={TurnDisplay} />
            <Route path='/' component={JoinChannel} />
          </Switch>
        </TopPaper>
        <BottomPaper>
          <Switch>
            <Route path='/room-admin' component={AdminNext} />
            <Route path='/join/:roomId' component={TurnCounter} />
            <Route path='/room/:roomId' component={TurnCounter} />
            <Route path='/' component={CreateChannel} />
          </Switch>
        </BottomPaper>
      </RootDiv>
    </TurnContextProvider>
  )
}

export default TurnManager
