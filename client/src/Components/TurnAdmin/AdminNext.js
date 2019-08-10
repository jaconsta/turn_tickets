import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'

import { Mutation } from 'react-apollo'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'

import { ButtonActionButton } from 'Components/Shared/styled'
import { TurnContextConsumer } from 'Components/TurnManager/TurnContext'

const SET_AND_GET_NEXT_IN_QUEUE = gql`
mutation SetChannelNextTurn($channelCode: String!){
  channelNextTurn(channel: {channelCode: $channelCode}) {
    channelCode
    currentTurn
    personDetails {
      channelId
      name
      email
      details
      queueTurn
    }
  }
}
`

const AdminNext = props => {
  const [showError, setShowError] = useState({ message: '', open: false })

  const channelDetails = JSON.parse(localStorage.getItem('channelHost'))
  useEffect(() => {
    if (!channelDetails) props.history.push('/')
  })
  const requestNext = updateQuery => (setPersonDetails, setCurrentTurn) => async () => {
    const res = await updateQuery({variables: {channelCode: channelDetails.channelCode}})

    const { data: { channelNextTurn : { currentTurn, personDetails } } } = res
    setPersonDetails(personDetails || {})
    setCurrentTurn(currentTurn)
  }

  const shouldShowError = (graphQlError) => {
    if (!graphQlError) return
    const errorMessage = graphQlError.message.slice(14)
    if (showError.open === false && errorMessage !== showError.message) setShowError({ message: errorMessage, open: true })
  }
  const closeError = () => setShowError({...showError, open: false })

  const closeQueueChannel = () => {
    localStorage.removeItem('channelHost')
    props.history.push('/')
  }
  return (
    <TurnContextConsumer>
      {({ setPersonDetails, setCurrentTurn }) => (
        <Mutation mutation={SET_AND_GET_NEXT_IN_QUEUE}>
          { (channelNextTurn, {error, loading}) => {
            if (loading && showError.message !== '') setShowError({ message: '', open: false })
            shouldShowError(error)

            return (
              <>
                <Snackbar
                  {...showError}
                  onClose={ closeError }
                  autoHideDuration={6000}
                />
                <ButtonActionButton onClick={requestNext(channelNextTurn)(setPersonDetails, setCurrentTurn)} variant="contained" color="secondary" disabled={loading}>Call Next</ButtonActionButton>
                <Button onClick={closeQueueChannel}fullWidth>Close queue</Button>
              </>
            )
          }}
        </Mutation>
      )}
    </TurnContextConsumer>
  )
}

export default AdminNext
