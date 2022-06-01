import React, { useEffect, useContext } from "react"
import { CurrentPageContext } from "../App"
import useIndex from "./hooks/useIndex"
import {
  DestinationMain,
  Heading2,
  Heading2Span,
  CardImg,
  CardSection,
  TabsUl,
  TabsLi,
  TabsAnchor,
  Heading3,
  CardParagraph,
  CardHr,
  CardInfo,
  Heading4,
  CardInfoParagraph,
  InfoDiv,
} from "./styles/destination/Destination"

const DestinationInfo = [
  {
    title: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },
  {
    title: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    travelTime: "9 months",
  },
  {
    title: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    travelTime: "3 years",
  },
  {
    title: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    travelTime: "7 years",
  },
]

const Destination = () => {
  const dispatch = useContext(CurrentPageContext)
  const { index, setIndex, status, setStatus } = useIndex()

  useEffect(() => {
    setStatus({
      moon: "active",
    })
  }, [])

  useEffect(() => {
    dispatch({ type: "destination", payload: "destination" })
  }, [dispatch])

  return (
    <DestinationMain>
      <Heading2>
        01
        <Heading2Span>Pick your destination</Heading2Span>
      </Heading2>
      <CardSection>
        <CardImg index={index} />
        <InfoDiv>
          <TabsUl>
            <TabsLi>
              <TabsAnchor
                className={status?.moon}
                onClick={() => {
                  setIndex(0)
                  setStatus({ moon: "active" })
                }}
              >
                Moon
              </TabsAnchor>
            </TabsLi>
            <TabsLi>
              <TabsAnchor
                className={status?.mars}
                onClick={() => {
                  setIndex(1)
                  setStatus({ mars: "active" })
                }}
              >
                Mars
              </TabsAnchor>
            </TabsLi>
            <TabsLi>
              <TabsAnchor
                className={status?.europa}
                onClick={() => {
                  setIndex(2)
                  setStatus({ europa: "active" })
                }}
              >
                Europa
              </TabsAnchor>
            </TabsLi>
            <TabsLi>
              <TabsAnchor
                className={status?.titan}
                onClick={() => {
                  setIndex(3)
                  setStatus({ titan: "active" })
                }}
              >
                Titan
              </TabsAnchor>
            </TabsLi>
          </TabsUl>
          <Heading3>{DestinationInfo[index].title}</Heading3>
          <CardParagraph>{DestinationInfo[index].description}</CardParagraph>
          <CardHr />
          <CardInfo>
            <div>
              <Heading4>Avg. Distance</Heading4>
              <CardInfoParagraph>
                {DestinationInfo[index].distance}
              </CardInfoParagraph>
            </div>
            <div>
              <Heading4>Est. travel time</Heading4>
              <CardInfoParagraph>
                {DestinationInfo[index].travelTime}
              </CardInfoParagraph>
            </div>
          </CardInfo>
        </InfoDiv>
      </CardSection>
    </DestinationMain>
  )
}

export default Destination
