import styled, { keyframes } from 'styled-components'

import Button from '@material-ui/core/Button'


const turnNumberBlink = keyframes`
  to {
    visibility: hidden;
  }
`
export const TurnNumber = styled.div`
  margin: auto;
  padding: 40px 50px;
  border: 12px solid beige;
  border-radius: 130px;
  font-size: 4em;
  color: white;
  height: 160px;
  width: 140px;
  span {
    animation: ${turnNumberBlink} 1s steps(5, start) infinite;
  }
`
export const CurrentTurnSpan = styled.span`
  color: white;
  font-weight: bold;
  margin-bottom: 2px !important;
  margin-left: 10px !important;
`
export const CounterContainer = styled.div`
  display: flex;
  flex-flow: column;
`
export const CurrentTurnNumber = styled.span`
  margin: auto;
  margin-top: 25px;
  color: white;
  font-size: 3em;
`
export const BackButton = styled(Button)`
  width: 50%;
  margin-left: auto !important;
  color: lightgray !important;
  font-size: 0.8em;
`
