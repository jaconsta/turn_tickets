import React, { useState } from 'react'
import PropTypes from 'prop-types'

import gql from "graphql-tag"
import { Mutation } from "react-apollo"


import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { SectionTitle, OptionButtonsContainer, SecionSubtitle } from './styled'

const JOIN_CHANNEL_MUTATION = gql`
  mutation JoinChannelMutation ($channelId: String!, $name: String!, $email: String!, $details: String!) {
    addChannelSubscription(channel: {channelId: $channelId, name: $name, email: $email, details: $details}) {
      _id
      queueTurn
    }
  }
`

const personalDetailInitial = {
  name: '',
  email: '',
  phone: '',
  details: '',
}

const JoinChannelDialog = props => {
  const [personalDetails, setPersonalDetails] = useState(personalDetailInitial)
  const textValueChange = field => e => setPersonalDetails({
    channelId: props.match.params.roomId,
    ...personalDetails,
    [field]: e.target.value,
  })

  const submitPersonalDetails = apolloMutation => async () => {
    const res = await apolloMutation({variables: personalDetails})
    console.log(res)

    if (!res.data) return console.log('error subscribing to queue')

    localStorage.setItem('channel_subscription', JSON.stringify({...res.data.addChannelSubscription, channelCode: props.match.params.roomId}))

    const channelName = props.match.params.roomId
    props.history.push(`/room/${channelName}`)
  }

  return (
    <Mutation mutation={JOIN_CHANNEL_MUTATION}>
     { (addChannelSubscription, {data}) => (
          <div>
            <SectionTitle  variant="h5">Join {props.match.params.roomId}</SectionTitle>
            <SecionSubtitle>Add this information</SecionSubtitle>
            <div>
              <TextField
                label="Full Name"
                value={personalDetails.name}
                onChange={textValueChange('name')}
                fullWidth
              />
              <TextField
                label="email"
                value={personalDetails.email}
                onChange={textValueChange('email')}
                type="email"
                fullWidth
              />
              <TextField
                label="Phone number"
                value={personalDetails.phone}
                onChange={textValueChange('phone')}
                fullWidth
              />
              <TextField
                label="Details"
                value={personalDetails.details}
                onChange={textValueChange('details')}
                fullWidth
                type="text area"
                multiline
                rows="2"
                rowsMax="3"
              />
            </div>
            <OptionButtonsContainer>
              <Button onClick={submitPersonalDetails(addChannelSubscription)} variant="contained" color="primary" size="small">Join</Button>
            </OptionButtonsContainer>
          </div>
        )
      }
    </Mutation>
  )
}

JoinChannelDialog.propTypes = {
  match: PropTypes.object,
}

export default JoinChannelDialog
