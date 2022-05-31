import React from "react"
import { useNavigate } from "react-router-dom"
import {
  Main,
  TitleHeading,
  TitleHeadingSpan,
  MainParagraph,
  ExploreBtn,
} from "./styles/home/Home"

const Home = () => {
  const navigate = useNavigate()

  return (
    <Main>
      <section>
        <TitleHeadingSpan>So, you want to travel to</TitleHeadingSpan>
        <TitleHeading>Space</TitleHeading>
        <MainParagraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </MainParagraph>
      </section>
      <ExploreBtn onClick={() => navigate("destination")}>Explore</ExploreBtn>
    </Main>
  )
}

export default Home
