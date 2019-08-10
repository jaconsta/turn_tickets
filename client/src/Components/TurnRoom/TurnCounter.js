import React from 'react'
import PropTypes from 'prop-types'

import gql from "graphql-tag"
import { Query } from "react-apollo"

import { TurnContextConsumer } from 'Components/TurnManager/TurnContext'

import { ChannelTitle, } from 'Components/Shared/styled'
import {
  CounterContainer,
  CurrentTurnNumber,
  BackButton,
} from './styled'

const GET_CURRENT_QUEUE_COUNT = gql`
  query GetCurrentQueueCount ($channelCode: String!){
    channelCurrentTurn (channelCode: $channelCode) {
      channelId
      currentTurn
    }
  }
`

const TurnCounter = props => {
  const cancelAndBack = () => {
    localStorage.removeItem('channel_subscription')
    props.history.push('/')
  }

  return (
    <TurnContextConsumer>
      { ({ setCurrentTurn }) => (
        <Query query={GET_CURRENT_QUEUE_COUNT} variables={{ channelCode: props.match.params.roomId }} pollInterval={3000}>
         {({loading, data, error}) => {
           if (loading) return <div>loading</div>
           if (error) return <div>Could not load turns</div>
           setCurrentTurn(data.channelCurrentTurn.currentTurn)

           return (
             <CounterContainer>
               <ChannelTitle variant="h6">Current Turn</ChannelTitle>
               <CurrentTurnNumber>{data.channelCurrentTurn.currentTurn}</CurrentTurnNumber>
               <BackButton onClick={cancelAndBack} size="small">Back &amp; Leave</BackButton>
             </CounterContainer>
           )
         }}
        </Query>
      )}
    </TurnContextConsumer>
  )
}

TurnCounter.propTypes = {
  currentTurn: PropTypes.number,
}

TurnCounter.defaultProps = {
  currentTurn: 0,
}

export default TurnCounter
