import React, { useState, useEffect, useContext } from "react"
import { CurrentPageContext } from "../App"
import {
  Main,
  Heading2,
  Span,
  Section,
  SLiderContainer,
  SliderControl,
  SliderControlButton,
  AboutContainer,
  Span1,
  Heading3,
  Paragraph,
} from "./styles/technology/Technology"

const TechInfo = [
  {
    name: "Launch Vehicle",
    about:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch",
  },
  {
    name: "Spaceport",
    about:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space Capsule",
    about:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]

const Technology = () => {
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState({
    tech1: "active-slider",
  })
  const dispatch = useContext(CurrentPageContext)

  useEffect(() => {
    dispatch({ type: "technology", payload: "technology" })
  }, [dispatch])

  return (
    <Main>
      <Heading2>
        03<Span>Space Launch 101</Span>
      </Heading2>
      <Section>
        <SLiderContainer index={index} />
        <SliderControl>
          <li>
            <SliderControlButton
              className={status?.tech1}
              onClick={() => {
                setIndex(0)
                setStatus({ tech1: "active-slider" })
              }}
            >
              1
            </SliderControlButton>
          </li>
          <li>
            <SliderControlButton
              className={status?.tech2}
              onClick={() => {
                setIndex(1)
                setStatus({ tech2: "active-slider" })
              }}
            >
              2
            </SliderControlButton>
          </li>
          <li>
            <SliderControlButton
              className={status?.tech3}
              onClick={() => {
                setIndex(2)
                setStatus({ tech3: "active-slider" })
              }}
            >
              3
            </SliderControlButton>
          </li>
        </SliderControl>
        <AboutContainer>
          <Span1>The Terminology…</Span1>
          <Heading3>{TechInfo[index].name}</Heading3>
          <Paragraph>{TechInfo[index].about}</Paragraph>
        </AboutContainer>
      </Section>
    </Main>
  )
}

export default Technology
