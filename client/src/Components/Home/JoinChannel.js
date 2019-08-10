import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'

import {
  JoinChannelDiv,
  JoinChannelButton,
  ErrorMessage,
} from './styled'

const JoinChannel = props => {
  const [channelName, setChannelName] = useState('')
  const [emptyNameError, setEmptyNameError] = useState(false)
  const [channelNotFoundError, setChannelNotFoundError] = useState(false)

  const channelNameChange = e => {
    const { value } = e.target
    if (emptyNameError) setEmptyNameError(false)
    if (channelNotFoundError) setChannelNotFoundError(false)
    setChannelName(value)
  }
  const submitChannel = () => {
    if(channelName === '') return setEmptyNameError(true)
    props.history.push(`/join/${channelName}`)
  }
  const rejoinChannel = (channelCode) => () => {
    props.history.push(`/room/${channelCode}`)
  }

  const isSubscribed = JSON.parse(localStorage.getItem('channel_subscription'))

  return (
    <JoinChannelDiv>
      <TextField
        label="Channel code"
        value={channelName}
        onChange={channelNameChange}
        fullWidth
      />
      { emptyNameError && <ErrorMessage>Enter a channel code</ErrorMessage> }
      { channelNotFoundError && <ErrorMessage>Channel does not exists</ErrorMessage> }
      <JoinChannelButton onClick={submitChannel} color="primary">Join</JoinChannelButton>
      { isSubscribed && <JoinChannelButton onClick={rejoinChannel(isSubscribed.channelCode)} color="secondary">Re Join {isSubscribed.channelCode}</JoinChannelButton>}
    </JoinChannelDiv>
  )
}

export default JoinChannel
