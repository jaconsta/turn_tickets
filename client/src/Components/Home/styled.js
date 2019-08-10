import styled from 'styled-components'

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


export const HomeDiv = styled.div`
  height: 600px;
  width: 350px;
  margin: 5px auto;
`
export const JoinChannelTitle = styled(Typography)`
  margin-top: 20px !important;
  align-self: center;
  color: antiquewhite;
`
export const SectionTitle = styled(JoinChannelTitle)`
  text-align: center;
`
export const SecionSubtitle = styled(Typography)`
  color: gray !lightgray;
`
export const JoinChannelDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const JoinChannelButton = styled(Button)`
  margin-top: 5px !important;
  & span {
    justify-content: right;
  }
`
export const CreateChannelButton = styled(Button)`
  margin: auto !important;
  width: 100%;
  height: 100%;
`
export const ErrorMessage = styled.span`
  font-size: 0.7em;
  font-weight: lighter;
  color: lightcyan;
`
export const OptionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  & button {
    width: 50%;
    margin-left: 3px;
    margin-right: 3px;
  }
  & a {
    margin-right: 3px;
  }
`
export const FullWidthLink = styled(Link)`
  width: 100%;
`
