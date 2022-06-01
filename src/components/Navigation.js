import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CurrentPageContext } from "../App"
import Modal from "./Modal"
import NavigationLinks from "./NavigationLinks"
import { Nav, NavLogoImg, HamburgerButton } from "./styles/nav/Nav"

const Navigation = (props) => {
  const { modal, setModalStatus } = props
  const dispatch = useContext(CurrentPageContext)

  return (
    <Nav>
      <Link
        onClick={() => dispatch({ type: "home" })}
        to="space-tourism-website"
      >
        <NavLogoImg />
      </Link>
      <HamburgerButton aria-label="Menu Button" onClick={setModalStatus} />
      <NavigationLinks />
      {modal && <Modal setModalStatus={setModalStatus} />}
    </Nav>
  )
}

export default Navigation
