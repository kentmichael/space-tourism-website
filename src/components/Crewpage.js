import React, { useContext, useEffect, useState } from "react"
import { CurrentPageContext } from "../App"
import {
  Main,
  Heading2,
  Span,
  Section,
  ImageDiv,
  Image,
  InfoDiv,
  InfoUl,
  Button,
  Span1,
  Heading3,
  Paragraph,
} from "./styles/crew/Crew.styles"

const CrewInfo = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    about:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    about:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    about:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    about:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
]

const Crew = () => {
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState({
    crew1: "active",
  })
  const dispatch = useContext(CurrentPageContext)

  useEffect(() => {
    dispatch({ type: "crew", payload: "crew" })
  }, [dispatch])

  return (
    <Main>
      <Heading2>
        02 <Span>Meet your crew</Span>
      </Heading2>
      <Section>
        <ImageDiv>
          <Image index={index} />
        </ImageDiv>
        <InfoDiv>
          <InfoUl>
            <li>
              <Button
                className={status?.crew1}
                onClick={() => {
                  setIndex(0)
                  setStatus({ crew1: "active" })
                }}
                aria-label="Crew 1"
              />
            </li>
            <li>
              <Button
                className={status?.crew2}
                onClick={() => {
                  setIndex(1)
                  setStatus({ crew2: "active" })
                }}
                aria-label="Crew 2"
              />
            </li>
            <li>
              <Button
                className={status?.crew3}
                onClick={() => {
                  setIndex(2)
                  setStatus({ crew3: "active" })
                }}
                aria-label="Crew 3"
              />
            </li>
            <li>
              <Button
                className={status?.crew4}
                onClick={() => {
                  setIndex(3)
                  setStatus({ crew4: "active" })
                }}
                aria-label="Crew 4"
              />
            </li>
          </InfoUl>
          <Span1>{CrewInfo[index].role}</Span1>
          <Heading3>{CrewInfo[index].name}</Heading3>
          <Paragraph>{CrewInfo[index].about}</Paragraph>
        </InfoDiv>
      </Section>
    </Main>
  )
}

export default Crew
