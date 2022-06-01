import styled from "styled-components"

export const Main = styled.main`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 5.1875rem;
  max-width: 69.69rem;
  margin-inline: 1.5rem;
  padding: 0;
  padding-block: 2.938rem;
  border: none;

  @media (min-width: 48em) {
    gap: 9.6875rem;
    margin-inline: 3.3125rem;
    padding-block: 6.75rem;
  }

  @media (min-width: 71.875em) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
    gap: 0;
    margin-inline: auto;
    padding-top: 15.8125rem;
    padding-bottom: 7.875rem;
  }
`

export const TitleHeading = styled.h1`
  margin-bottom: 1rem;
  font-size: 5rem;
  font-weight: 400;
  line-height: 6.25rem;
  text-transform: uppercase;
  text-align: center;
  color: var(--primary-txt-color);

  @media (min-width: 48em) {
    margin-bottom: 1.5rem;
    font-size: 9.375rem;
    line-height: 9.375rem;
  }

  @media (min-width: 71.875em) {
    text-align: left;
    line-height: 10.75rem;
  }
`

export const TitleHeadingSpan = styled.span`
  margin-bottom: 1rem;
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.2969rem;

  @media (min-width: 48em) {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  @media (min-width: 71.875em) {
    font-size: 1.75rem;
    text-align: left;
    letter-spacing: 0.2953rem;
  }
`

export const MainParagraph = styled.p`
  max-width: 27.75rem;
  font-weight: normal;
  text-align: center;
  line-height: 1.5625rem;
  letter-spacing: 0.081rem;

  @media (min-width: 48em) {
    line-height: 1.75rem;
  }

  @media (min-width: 71.875em) {
    text-align: left;
    line-height: 2rem;
  }
`

export const ExploreBtn = styled.button`
  width: 9.375rem;
  height: 9.375rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  font-size: 1.25rem;
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.078rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 1px 1px 1px 87px hsla(230, 35%, 7%, 0.8);
  }

  @media (min-width: 48em) {
    width: 15.13rem;
    height: 15.13rem;
    font-size: 2rem;
    letter-spacing: 0.125rem;
  }

  @media (min-width: 71.875em) {
    place-self: end;
    width: 17.125rem;
    height: 17.125rem;
  }
`
