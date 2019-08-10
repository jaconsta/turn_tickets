import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export const RootDiv = styled.div`
  height: 600px;
  width: 350px;
  margin: 5px auto;
`
export const TopPaper = styled(Paper)`
  height: 70%;
  background-color: orange !important;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const BottomPaper = styled(Paper)`
  height: 30%;
  background-color: #f50057 !important;
`
export const ChannelTitle = styled(Typography)`
  margin-top: 20px !important;
  align-self: center;
  color: antiquewhite;
`
export const ButtonActionButton = styled(Button)`
  margin: auto !important;
  width: 100%;
  height: 100%;
`
