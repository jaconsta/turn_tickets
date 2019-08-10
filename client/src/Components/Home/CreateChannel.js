import React, { useState } from 'react'

import gql from "graphql-tag"
import { Mutation } from "react-apollo"

import CreateChannelDialog from './CreateChannelDialog'
import {
  CreateChannelButton,
} from './styled'


const CREATE_NEW_CHANNEL = gql`
  mutation CreateNewChannel {
    addChannelDetails (channel:{}) {
      channelCode
      signInSecret
    }
  }
`

const CreateChannel = props => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  const openDialog = () => setDialogOpen(true)
  const closeDialog = () => setDialogOpen(false)

  const goToAdminRoom = () => props.history.push('/room-admin')

  const createChannel = mutation => async () => {
    const { data: { addChannelDetails } } = await mutation()
    localStorage.setItem('channelHost', JSON.stringify(addChannelDetails))
    goToAdminRoom()
  }

  const channelExists = JSON.parse(localStorage.getItem('channelHost'))
  const channelAdminAction = channelExists ?
    <CreateChannelButton onClick={goToAdminRoom} variant="contained" color="secondary">Rejoin channel <br /> {channelExists.channelCode}</CreateChannelButton> :
    <CreateChannelButton onClick={openDialog} variant="contained" color="secondary">Create a queue</CreateChannelButton>

  return (
    <Mutation mutation={CREATE_NEW_CHANNEL}>
      { (addChannelDetails, {data}) => (
          <>
            <CreateChannelDialog accept={createChannel(addChannelDetails)} open={isDialogOpen} onClose={closeDialog}/>
            { channelAdminAction }
          </>
        )
      }
    </Mutation>
  )

}

export default CreateChannel
