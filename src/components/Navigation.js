import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CurrentPageContext } from "../App"
import Modal from "./Modal"
import NavigationLinks from "./NavigationLinks"
import { Nav, NavLogoImg, HamburgerButton } from "./styles/nav/Nav.styles"

const Navigation = () => {
  const [modal, showModal] = useState(false)
  const dispatch = useContext(CurrentPageContext)

  const setModalStatus = () => {
    showModal(!modal)
  }

  return (
    <Nav>
      <Link onClick={() => dispatch({ type: "home" })} to="/">
        <NavLogoImg />
      </Link>
      <HamburgerButton aria-label="Menu Button" onClick={setModalStatus} />
      <NavigationLinks />

      {modal && <Modal setModalStatus={setModalStatus} />}
    </Nav>
  )
}

export default Navigation
