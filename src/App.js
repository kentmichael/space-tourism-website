import React, { useEffect, useReducer, useState } from "react"
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
  const [modal, showModal] = useState(false)
  const setModalStatus = () => {
    showModal(!modal)
  }

  useEffect(() => {
    showModal(false)
  }, [state])

  return (
    <React.Fragment>
      <CurrentPageContext.Provider value={dispatch}>
        <GlobalStyle modal={modal} state={state} />
        <Navigation modal={modal} setModalStatus={setModalStatus} />
        <Routes>
          <Route path="space-tourism-website" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </CurrentPageContext.Provider>
    </React.Fragment>
  )
}

export default App
