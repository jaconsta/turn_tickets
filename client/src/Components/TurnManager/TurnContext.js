import { createContext } from 'react'

const TurnContext = createContext({
  currentTurn: 0,
  personDetails: {},
  setPersonDetails: () => {},
  setCurrentTurn: () => {},
})

export const TurnContextProvider = TurnContext.Provider
export const TurnContextConsumer = TurnContext.Consumer
export default TurnContext
