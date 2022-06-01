import { createGlobalStyle } from "styled-components"
import HomeMobileBg from "../../../assets/home/background-home-mobile.jpg"
import HomeTabletBg from "../../../assets/home/background-home-tablet.jpg"
import HomeDesktopBg from "../../../assets/home/background-home-desktop.jpg"
import DestinationMobileBg from "../../../assets/destination/background-destination-mobile.jpg"
import DestinationTabletBg from "../../../assets/destination/background-destination-tablet.jpg"
import DestinationDesktopBg from "../../../assets/destination/background-destination-desktop.jpg"
import CrewMobileBg from "../../../assets/crew/background-crew-mobile.jpg"
import CrewTabletBg from "../../../assets/crew/background-crew-tablet.jpg"
import CrewDesktopBg from "../../../assets/crew/background-crew-desktop.jpg"
import TechnologyMobileBg from "../../../assets/technology/background-technology-mobile.jpg"
import TechnologyTabletBg from "../../../assets/technology/background-technology-tablet.jpg"
import TechnologyDesktopBg from "../../../assets/technology/background-technology-desktop.jpg"

export const GlobalStyle = createGlobalStyle`
  :root {
    // Colors
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --primary-txt-color: hsl(0, 0%, 100%);
    --secondary-txt-color: hsl(231, 77%, 90%);
    --button-txt-color: hsl(230, 35%, 7%);

    // Fonts
    --font-body: 'Barlow Condensed', sans-serif;
    --font-heading: 'Bellefair', serif;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    overflow-y: ${(props) => (props.modal ? "hidden" : "auto")};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    font-size: 1.125rem;
    color: var(--secondary-txt-color);
    background-image: url(
      ${(props) => {
        switch (props.state.currentPage) {
          case "home":
            return `${HomeMobileBg}`
          case "destination":
            return `${DestinationMobileBg}`
          case "crew":
            return `${CrewMobileBg}`
          case "technology":
            return `${TechnologyMobileBg}`
          default:
            return `${HomeMobileBg}`
        }
      }}
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @media (min-width: 48em) {
      background-image: url(
      ${(props) => {
        switch (props.state.currentPage) {
          case "home":
            return `${HomeTabletBg}`
          case "destination":
            return `${DestinationTabletBg}`
          case "crew":
            return `${CrewTabletBg}`
          case "technology":
            return `${TechnologyTabletBg}`
          default:
            return `${HomeTabletBg}`
        }
      }}
    );
    }

    @media (min-width: 71.875em) {
      background-image: url(
      ${(props) => {
        switch (props.state.currentPage) {
          case "home":
            return `${HomeDesktopBg}`
          case "destination":
            return `${DestinationDesktopBg}`
          case "crew":
            return `${CrewDesktopBg}`
          case "technology":
            return `${TechnologyDesktopBg}`
          default:
            return `${HomeDesktopBg}`
        }
      }}
    );
}
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    line-height: 1.1;
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
  }

  a:link,
  a:visited,
  a:hover {
    text-decoration: none;
  }

  .active {
    opacity: 1;

    &::after {
      opacity: 1;
    }
  }

  .active-slider {
    background-color: var(--white);
    color: var(--button-txt-color);
  }
`
