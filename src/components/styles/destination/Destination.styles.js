import styled from "styled-components"
import MoonImg from "../../../assets/destination/image-moon.png"
import MarsImg from "../../../assets/destination/image-mars.png"
import EuropaImg from "../../../assets/destination/image-europa.png"
import TitanImg from "../../../assets/destination/image-titan.png"

export const DestinationMain = styled.main`
  max-width: 69.4375rem;
  margin-inline: 1.5rem;
  margin-bottom: 3.875rem;

  @media (min-width: 48em) {
    margin-block: 2.5rem;
    margin-inline: 2.4375rem;
  }

  @media (min-width: 71.875em) {
    margin-block: 4.875rem;
    margin-inline: auto;
  }
`

export const Heading2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 1rem;
  font-family: var(--font-body);
  letter-spacing: 0.1687rem;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 48em) {
    margin-bottom: 3.75rem;
    font-size: 1.25rem;
    text-align: left;
  }
`

export const Heading2Span = styled.span`
  margin-left: 1.125rem;
  font-weight: 400;
  color: var(--primary-txt-color);
`

export const CardSection = styled.section`
  display: grid;
  justify-items: center;
  gap: 1.875rem;

  @media (min-width: 48em) {
    gap: 3.3125rem;
  }

  @media (min-width: 71.875em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
`

export const CardImg = styled.img.attrs((props) => {
  switch (props.index) {
    case 0:
      return { src: MoonImg, alt: "Moon Image" }
    case 1:
      return { src: MarsImg, alt: "Mars Image" }
    case 2:
      return { src: EuropaImg, alt: "Europa Image" }
    case 3:
      return { src: TitanImg, alt: "Titan Image" }
    default:
      return { src: MoonImg, alt: "Moon Image" }
  }
})`
  width: 10.625rem;
  height: 10.625rem;

  @media (min-width: 48em) {
    width: 18.75rem;
    height: 18.75rem;
  }

  @media (min-width: 71.875em) {
    justify-self: start;
    align-self: end;
    width: 27.8125rem;
    height: 27.8125rem;
  }
`

export const InfoDiv = styled.div`
  @media (min-width: 71.875em) {
    justify-self: end;
  }
`

export const TabsUl = styled.ul`
  list-style-type: none;
  width: 14.84rem;
  height: 1.75rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0;
  margin-inline: auto;
  margin-bottom: 1.75rem;
  padding: 0;

  @media (min-width: 48em) {
    width: 17.875rem;
    height: 2.125rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 71.875em) {
    margin-inline: 0;
    margin-bottom: 2.3125rem;
  }
`

export const TabsLi = styled.li`
  height: 100%;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1477rem;

  @media (min-width: 48em) {
    font-size: 1rem;
  }
`

export const TabsAnchor = styled.a`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: hsl(231, 77%, 90%);
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    display: block;
    width: inherit;
    height: inherit;
    border-bottom: 0.1875rem solid var(--white);
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  &:hover {
    &::after {
      opacity: 0.5;
    }
  }

  &:active {
    color: var(--white);
    &::after {
      opacity: 1;
    }
  }
`

export const Heading3 = styled.h3`
  font-size: 3.5rem;
  text-transform: uppercase;
  text-align: center;
  color: var(--primary-txt-color);

  @media (min-width: 48em) {
    margin-bottom: 0.5rem;
    font-size: 5rem;
    line-height: 5.75rem;
  }

  @media (min-width: 71.875em) {
    margin-bottom: 0.875rem;
    font-size: 6.25rem;
    text-align: left;
    line-height: 7.1875rem;
  }
`

export const CardParagraph = styled.p`
  max-width: 35.81rem;
  margin-bottom: 2rem;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  text-align: center;
  letter-spacing: 0.1rem;

  @media (min-width: 48em) {
    margin-bottom: 3.0625rem;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 71.875em) {
    max-width: 27.8125rem;
    margin-bottom: 3.375rem;
    font-size: 1.125rem;
    line-height: 2rem;
    text-align: left;
  }
`

export const CardHr = styled.hr`
  margin-bottom: 2rem;

  @media (min-width: 48em) {
    margin-bottom: 1.75rem;
  }
`

export const CardInfo = styled.div`
  display: grid;
  justify-items: center;
  gap: 2.5rem;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 71.875em) {
    justify-items: start;
    text-align: left;
  }
`

export const Heading4 = styled.h4`
  margin-bottom: 1.125rem;
  font-size: 0.875rem;
  font-family: var(--font-body);
  line-height: 1.0625rem;
  letter-spacing: 0.1477rem;

  @media (min-width: 48em) {
    margin-bottom: 0.75rem;
  }
`

export const CardInfoParagraph = styled.p`
  font-size: 1.75rem;
  font-family: var(--font-heading);
  line-height: 2rem;
  color: var(--primary-txt-color);
`
