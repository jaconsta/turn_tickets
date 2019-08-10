import React from 'react'
import PropTypes from 'prop-types'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import { DetailsWrapper, NotProvidedSpan } from './styled'
import { ChannelTitle } from 'Components/Shared/styled'
import { TurnContextConsumer } from 'Components/TurnManager/TurnContext'

const NOT_PROVIDED = <NotProvidedSpan>Not provided</NotProvidedSpan>

const PersonDetails = props =>{
  const { channelCode } = JSON.parse(localStorage.getItem('channelHost')) || {}
  return (
    <TurnContextConsumer>
      {({ currentTurn, personDetails: {name, email, phone, details}}) => (
        <>
          <ChannelTitle>Room { channelCode } <br /> Current turn: {currentTurn}</ChannelTitle>
          <DetailsWrapper>
            <Typography variant="subtitle2">Name</Typography>
            <Typography variant="body1">{name || NOT_PROVIDED}</Typography>
          </DetailsWrapper>
          <Divider />
          <DetailsWrapper>
            <Typography variant="subtitle2">email</Typography>
            <Typography variant="body1">{email || NOT_PROVIDED}</Typography>
          </DetailsWrapper>
          <Divider />
          <DetailsWrapper>
            <Typography variant="subtitle2">details</Typography>
            <Typography variant="body1">
              {details || NOT_PROVIDED}
            </Typography>
          </DetailsWrapper>
        </>
      )}
    </TurnContextConsumer>
  )
}

PersonDetails.propTypes = {
  currentTurn: PropTypes.number,
}

PersonDetails.defaultProps = {
  currentTurn: 0,
}

export default PersonDetails
