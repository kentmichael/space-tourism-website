import styled from "styled-components"
import Hurley from "../../../assets/crew/image-douglas-hurley.png"
import Shuttleworth from "../../../assets/crew/image-mark-shuttleworth.png"
import Glover from "../../../assets/crew/image-victor-glover.png"
import Ansari from "../../../assets/crew/image-anousheh-ansari.png"

export const Main = styled.main`
  max-width: 69.4375rem;
  margin-inline: 1.5rem;
  padding: 0;
  border: none;

  @media (min-width: 48em) {
    margin-inline: 2.4375rem;
    padding-top: 2.5rem;
  }

  @media (min-width: 71.875em) {
    margin-inline: auto;
    padding-top: 4.75rem;
  }
`

export const Heading2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 1rem;
  font-family: var(--font-body);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1688rem;

  @media (min-width: 48em) {
    margin-bottom: 3.75rem;
    text-align: left;
  }

  @media (min-width: 71.875em) {
    margin-bottom: 0;
    font-size: 1.75rem;
  }
`

export const Span = styled.span`
  font-weight: 400;
  color: var(--primary-txt-color);
`

export const Section = styled.section`
  display: grid;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 48em) {
    gap: 2.5rem;
  }

  @media (min-width: 71.875em) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    justify-items: start;
  }
`

export const ImageDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  height: 13.875rem;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #383b4b;

  @media (min-width: 48em) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    height: 35.75rem;
    border: none;
  }

  @media (min-width: 71.875em) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: 44.5rem;
    justify-content: end;
  }
`

export const Image = styled.img.attrs((props) => {
  switch (props.index) {
    case 0:
      return {
        src: Hurley,
        alt: "Hurley Image",
      }
    case 1:
      return {
        src: Shuttleworth,
        alt: "Shuttleworth Image",
      }
    case 2:
      return {
        src: Glover,
        alt: "Glover Image",
      }
    case 3:
      return {
        src: Ansari,
        alt: "Ansari Image",
      }
    default:
      return {
        src: Hurley,
        alt: "Hurley Image",
      }
  }
})`
  width: 10.06rem;
  height: 100%;

  @media (min-width: 48em) {
    width: 25.94rem;
  }

  @media (min-width: 71.875em) {
    width: 31.93rem;
  }
`

export const InfoDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  @media (min-width: 48em) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  @media (min-width: 71.875em) {
    justify-content: flex-end;
    align-items: flex-start;
  }
`

export const InfoUl = styled.ul`
  order: 1;
  list-style-type: none;
  min-width: 5.5rem;
  margin: 0;
  margin-bottom: 2rem;
  padding: 0;
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (min-width: 48em) {
    order: 4;
    margin-bottom: 0;
  }

  @media (min-width: 71.875em) {
    width: 8.25rem;
    margin-bottom: 5.875rem;
  }
`

export const Button = styled.button`
  width: 0.625rem;
  height: 0.625rem;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: var(--white);
  opacity: 0.3;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 71.875em) {
    width: 1rem;
    height: 1rem;
  }
`

export const Span1 = styled.span`
  order: 2;
  margin-bottom: 0.5rem;
  display: block;
  font-family: var(--font-heading);
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 48em) {
    order: 1;
    font-size: 1.5rem;
  }

  @media (min-width: 71.875em) {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: left;
  }
`

export const Heading3 = styled.h3`
  order: 3;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-txt-color);

  @media (min-width: 48em) {
    order: 2;
    font-size: 2.5rem;
  }

  @media (min-width: 71.875em) {
    margin-bottom: 1.6875rem;
    font-size: 3.5rem;
    text-align: left;
  }
`

export const Paragraph = styled.p`
  max-width: 28.625rem;
  order: 4;
  font-size: 0.9375rem;
  text-align: center;
  letter-spacing: 0.081rem;
  line-height: 1.5625rem;

  @media (min-width: 48em) {
    order: 3;
    margin-bottom: 2.5rem;
    font-size: 1rem;
  }

  @media (min-width: 71.875em) {
    max-width: 27.75rem;
    margin-bottom: 7.5rem;
    font-size: 1.125rem;
    text-align: left;
  }
`
