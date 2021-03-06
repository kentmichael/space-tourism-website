import React, { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CurrentPageContext } from "../App"
import {
  Main,
  TitleHeading,
  TitleHeadingSpan,
  MainParagraph,
  ExploreBtn,
} from "./styles/home/Home"

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useContext(CurrentPageContext)

  useEffect(() => {
    dispatch({ type: "home" })
  }, [dispatch])

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
      <ExploreBtn
        onClick={() => {
          dispatch({ type: "destination", payload: "destination" })
          navigate("destination")
        }}
      >
        Explore
      </ExploreBtn>
    </Main>
  )
}

export default Home
