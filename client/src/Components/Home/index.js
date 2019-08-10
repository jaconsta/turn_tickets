import React from 'react'

import JoinChannel from './JoinChannel'
import CreateChannel from './CreateChannel'
import {
  TopPaper,
  BottomPaper,
} from 'Components/Shared/styled'
import {
  HomeDiv,
  JoinChannelTitle,
} from './styled'

const Home = () => (
  <HomeDiv>
    <TopPaper>
      <JoinChannelTitle variant="h5">Join a channel</JoinChannelTitle>
      <JoinChannel />
    </TopPaper>
    <BottomPaper>
      <CreateChannel />
    </BottomPaper>
  </HomeDiv>
)

export default Home
