import React, { useContext } from "react"
import { CurrentPageContext } from "../App"
import {
  NavListUl,
  NavListLi,
  StyledNavLink,
  StyledNavLinkSpan,
} from "./styles/nav/Nav"

const Links = () => {
  const dispatch = useContext(CurrentPageContext)

  return (
    <NavListUl>
      <NavListLi>
        <StyledNavLink onClick={() => dispatch({ type: "home" })} to="/">
          <StyledNavLinkSpan>00</StyledNavLinkSpan>Home
        </StyledNavLink>
      </NavListLi>
      <NavListLi>
        <StyledNavLink
          onClick={() =>
            dispatch({ type: "destination", payload: "destination" })
          }
          to="destination"
        >
          <StyledNavLinkSpan>01</StyledNavLinkSpan>Destination
        </StyledNavLink>
      </NavListLi>
      <NavListLi>
        <StyledNavLink
          onClick={() => dispatch({ type: "crew", payload: "crew" })}
          to="crew"
        >
          <StyledNavLinkSpan>02</StyledNavLinkSpan>Crew
        </StyledNavLink>
      </NavListLi>
      <NavListLi>
        <StyledNavLink
          onClick={() =>
            dispatch({ type: "technology", payload: "technology" })
          }
          to="technology"
        >
          <StyledNavLinkSpan>03</StyledNavLinkSpan>Technology
        </StyledNavLink>
      </NavListLi>
    </NavListUl>
  )
}

export default Links
