import styled from "styled-components"
import BurgerIcon from "../../../assets/shared/icon-hamburger.svg"
import Logo from "../../../assets/shared/logo.svg"
import CloseIcon from "../../../assets/shared/icon-close.svg"
import { NavLink } from "react-router-dom"

export const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem;

  @media (min-width: 48em) {
    margin: 0;
    margin-left: 2.4375rem;
  }

  @media (min-width: 71.875em) {
    margin-top: 2.375rem;
    margin-left: 3.3125rem;
  }

  @media (min-width: 90em) {
    max-width: 86.5625rem;
    margin-inline: auto;
  }
`

export const NavLogoImg = styled.img.attrs({
  src: Logo,
  alt: "Website Logo",
  "aria-label": "Menu Button",
})`
  width: 2.5rem;
  height: 2.5rem;

  @media (min-width: 48em) {
    width: 3rem;
    height: 3rem;
  }
`

export const HamburgerButton = styled.button`
  width: 1.5rem;
  height: 1.3125rem;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url(${BurgerIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  cursor: pointer;

  @media (min-width: 48em) {
    display: none;
  }
`

export const NavListContainer = styled.div`
  @media (max-width: 47.9375em) {
    display: none;
  }
`

export const NavListUl = styled.ul`
  position: relative;
  height: 6rem;
  list-style-type: none;
  margin: 0;
  padding-inline: 2.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2.375rem;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(5.0968rem);

  &::after {
    content: "";
    position: absolute;
    display: block;
    height: 0.0625rem;
    width: 29.5625rem;
    transform: translateX(-115%);
    background-color: var(--white);
    opacity: 0.5;
    visibility: hidden;

    @media (min-width: 90em) {
      visibility: visible;
    }
  }

  @media (max-width: 47.9375em) {
    flex-flow: column wrap;
    align-items: flex-start;
    gap: 1.875rem;
    height: auto;
    padding-inline: 0;
    background-color: transparent;
    backdrop-filter: blur(0);
  }

  @media (min-width: 71.875em) {
    padding-left: 7rem;
    padding-right: 10.4375rem;
    gap: 3.125rem;
  }
`

export const NavListLi = styled.li`
  @media (max-width: 47.9375em) {
    position: relative;
    width: 100%;
  }
`

export const StyledNavLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  height: 100%;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--primary-txt-color);
  letter-spacing: 0.16875rem;

  @media (max-width: 47.9375em) {
    width: 100%;
    padding-block: 0.625rem;
    font-size: 1.1875rem;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 280%;
    width: 100%;
    height: 0.1875rem;
    background-color: var(--white);
    opacity: 0;
    transition: all 300ms ease-in-out;

    @media (max-width: 47.9375em) {
      width: 0.1875rem;
      height: 100%;
      top: 0;
      right: 0;
    }
  }

  &:hover {
    &::after {
      opacity: 0.5;
    }
  }

  &:focus {
    &::after {
      opacity: 1;
    }
  }
`

export const StyledNavLinkSpan = styled.span`
  margin-right: 0.625rem;
  font-weight: 700;

  @media (min-width: 48em) and (max-width: 71.8125em) {
    display: none;
  }
`

export const StyledDialog = styled.dialog.attrs({ open: true })`
  position: absolute;
  top: 0;
  right: 0;
  left: 40%;
  height: 100%;
  width: 60%;
  margin: 0;
  padding-block: 2.125rem;
  padding-left: 2.0625rem;
  padding-right: 0;
  border: none;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(5.0968rem);

  @media (min-width: 48em) {
    display: none;
  }

  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsl(230, 35%, 7%);
  }
`

export const CloseModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-inline: 2.0625rem;
  margin-bottom: 3.625rem;
`

export const CloseModalBtn = styled.button`
  width: 1.1875rem;
  height: 1.1875rem;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url(${CloseIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  cursor: pointer;
`

export const DialogBgOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: transparent;
`
