import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { TurnContextConsumer } from 'Components/TurnManager/TurnContext'

import { ChannelTitle } from 'Components/Shared/styled'
import { TurnNumber, CurrentTurnSpan } from './styled'

const TurnDisplay = props => {
  const [myTurn, setMyTurn] = useState(0)

  const turnStorage = JSON.parse(localStorage.getItem('channel_subscription'))
  useEffect(() => {
    turnStorage ? setMyTurn(turnStorage.queueTurn) : props.history.push('/')
  } , [turnStorage, props.history])

  return (
    <TurnContextConsumer>
      { ({ currentTurn }) => (
        <>
          <ChannelTitle variant="h5">Channel: {props.match.params.roomId}</ChannelTitle>
          <TurnNumber>
            { (currentTurn === myTurn) && <span>Your<br/>Turn</span> }
          </TurnNumber>
          <CurrentTurnSpan>Your turn:&nbsp;&nbsp; {myTurn}</CurrentTurnSpan>
        </>
      )}
    </TurnContextConsumer>
  )
}

TurnDisplay.propTypes = {
  showTurn: PropTypes.bool,
}

TurnDisplay.defaultProps = {
  showTurn: false,
}

export default TurnDisplay
