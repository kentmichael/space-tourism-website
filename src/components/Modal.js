import React from "react"
import ReactDOM from "react-dom"
import Links from "./Links"
import {
  CloseModalBtn,
  CloseModalContainer,
  DialogBgOverlay,
  StyledDialog,
} from "./styles/nav/Nav.styles"

const Modal = ({ setModalStatus }) => {
  return ReactDOM.createPortal(
    <DialogBgOverlay onClick={setModalStatus}>
      <StyledDialog onClick={(event) => event.stopPropagation()}>
        <CloseModalContainer>
          <CloseModalBtn onClick={setModalStatus} aria-label="Close Modal" />
        </CloseModalContainer>
        <Links />
      </StyledDialog>
    </DialogBgOverlay>,
    document.getElementById("modal")
  )
}

export default Modal
