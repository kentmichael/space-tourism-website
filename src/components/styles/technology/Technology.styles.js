import styled from "styled-components"
import LaunchVehicleLandscape from "../../../assets/technology/image-launch-vehicle-landscape.jpg"
import LaunchVehiclePortrait from "../../../assets/technology/image-launch-vehicle-portrait.jpg"

import SpaceCapsuleLandscape from "../../../assets/technology/image-space-capsule-landscape.jpg"
import SpaceCapsulePortrait from "../../../assets/technology/image-space-capsule-portrait.jpg"

import SpaceportLandscape from "../../../assets/technology/image-spaceport-landscape.jpg"
import SpaceportPortrait from "../../../assets/technology/image-spaceport-portrait.jpg"

export const Main = styled.main`
  max-width: 86.5625rem;
  margin: 0;
  margin-bottom: 5.06rem;
  padding: 0;
  border: none;

  @media (min-width: 48em) {
    margin-bottom: 6.06rem;
    padding-top: 2.5rem;
  }

  @media (min-width: 71.875em) {
    margin-bottom: 6.31rem;
    margin-left: 3.3125rem;
    padding-top: 4.75rem;
  }

  @media (min-width: 90em) {
    margin-inline: auto;
  }
`

export const Heading2 = styled.h2`
  max-width: 1274px;
  margin-bottom: 2rem;
  margin-inline: 1.5rem;
  font-size: 1rem;
  font-family: var(--font-body);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1688rem;

  @media (min-width: 48em) {
    margin-bottom: 3.75rem;
    margin-inline: 2.4375rem;
    font-size: 1.25rem;
    text-align: left;
  }

  @media (min-width: 71.875em) {
    margin-inline: 0;
    margin-left: auto;
    margin-bottom: 1.63rem;
    font-size: 1.75rem;
  }
`

export const Span = styled.span`
  margin-left: 1rem;
  font-weight: 400;
  color: var(--primary-txt-color);
`

export const Section = styled.section`
  max-width: 1274px;
  display: grid;
  justify-items: center;

  @media (min-width: 71.875em) {
    grid-template-columns: 1fr 4fr 4fr;
    margin-left: auto;
  }
`

export const SLiderContainer = styled.div`
  width: 100%;
  height: 10.625rem;
  margin-bottom: 2.125rem;
  background-image: url(${(props) => {
    switch (props.index) {
      case 0:
        return `${LaunchVehicleLandscape}`
      case 1:
        return `${SpaceCapsuleLandscape}`
      case 2:
        return `${SpaceportLandscape}`
      default:
        return `${LaunchVehicleLandscape}`
    }
  }});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;

  @media (min-width: 48em) {
    height: 19.375rem;
    margin-bottom: 3.5rem;
  }

  @media (min-width: 71.875em) {
    background-image: url(${(props) => {
      switch (props.index) {
        case 0:
          return `${LaunchVehiclePortrait}`
        case 1:
          return `${SpaceCapsulePortrait}`
        case 2:
          return `${SpaceportPortrait}`
        default:
          return `${LaunchVehiclePortrait}`
      }
    }});
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    place-self: end;
    width: 32.18rem;
    height: 32.94rem;
    margin-bottom: 0;
  }
`

export const SliderControl = styled.ul`
  list-style-type: none;
  width: 9.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 1.625rem;
  padding: 0;
  border: none;

  @media (min-width: 48em) {
    width: 13.13rem;
    margin-bottom: 2.75rem;
  }

  @media (min-width: 71.875em) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: start;
    flex-flow: column wrap;
    justify-content: center;
    gap: 2rem;
    width: auto;
    margin-bottom: 0;
  }
`

export const SliderControlButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0;
  padding: 0;
  border: 1px solid var(--white);
  border-radius: 50%;
  background-color: transparent;
  font-size: 1rem;
  color: var(--primary-txt-color);
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: var(--white);
    color: var(--button-txt-color);
  }

  @media (min-width: 48em) {
    width: 3.75rem;
    height: 3.75rem;
  }

  @media (min-width: 71.875em) {
    width: 5rem;
    height: 5rem;
  }
`

export const AboutContainer = styled.div`
  max-width: 28.63rem;
  margin-inline: 1.5rem;

  @media (min-width: 48em) {
    margin-inline: 2.4375rem;
  }

  @media (min-width: 71.875em) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: start;
    align-self: center;
    max-width: 32.38rem;
    margin-inline: 0;
  }
`

export const Span1 = styled.span`
  display: block;
  margin-bottom: 0.5625rem;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: 0.1477rem;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 48em) {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.1875rem;
    letter-spacing: 0.17rem;
  }

  @media (min-width: 71.875em) {
    margin-bottom: 0.68rem;
    text-align: left;
  }
`

export const Heading3 = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.75rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-txt-color);

  @media (min-width: 48em) {
    font-size: 2.5rem;
    line-height: 2.875rem;
    letter-spacing: 0.17rem;
  }

  @media (min-width: 71.875em) {
    font-size: 3.5rem;
    line-height: 4rem;
    text-align: left;
  }
`

export const Paragraph = styled.p`
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  text-align: center;
  letter-spacing: 0.081rem;

  @media (min-width: 48em) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 71.875em) {
    font-size: 1.125rem;
    line-height: 2rem;
    text-align: left;
  }
`
