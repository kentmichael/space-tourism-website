import React, { useReducer } from "react"
import { Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./components/styles/globals/Global.styles"
import Home from "./components/Homepage"
import Navigation from "./components/Navigation"
import Destination from "./components/Destinationpage"
import Crew from "./components/Crewpage"
import Technology from "./components/Technologypage"

export const CurrentPageContext = React.createContext()

const initialState = {
  currentPage: "home",
}

const reducerFunc = (currentState, action) => {
  switch (action.type) {
    case "home":
      return initialState
    case "destination":
      return {
        currentPage: action.payload,
      }
    case "crew":
      return {
        currentPage: action.payload,
      }
    case "technology":
      return {
        currentPage: action.payload,
      }
    default:
      return currentState
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFunc, initialState)

  return (
    <React.Fragment>
      <CurrentPageContext.Provider value={dispatch}>
        <GlobalStyle state={state} />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </CurrentPageContext.Provider>
    </React.Fragment>
  )
}

export default App
