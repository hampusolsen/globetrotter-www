import styled from "styled-components";
import { color, font, media } from "../../../resources/style/variables.style";
import logo from "../../../resources/svg/logo.svg";
import mountains from "../../../resources/svg/mountains.svg";

const WelcomeViewLayout = styled.div<{
  viewport: { height: number; width: number };
}>`
  position: relative;
  height: ${({ viewport }) => viewport.height}px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    min-height: 100vh;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 55%;
    width: 100%;
    background: url(${logo}), url(${mountains}), ${color.darkblue};
    background-repeat: no-repeat;
    background-size: 54px, 150%;
    background-position: top 16px left 16px, bottom;

    ${media.tablet} {
      background-size: 200px, contain;
      background-position: center 40%, bottom;
    }

    ${media.desktop} {
      background-size: 300px, contain;
    }

    button {
      margin: 24px 24px 0 auto;
    }

    section {
      display: none;

      ${media.tablet} {
        position: absolute;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        background-color: rgba(0, 0, 0, 0.65);
        width: 500px;
        margin: 36px auto 0;
        padding: 24px;
        box-shadow: 0 -12px 24px 0 rgba(0, 0, 0, 0.22);
        box-sizing: border-box;
      }

      h1,
      h2 {
        color: ${color.smokewhite};
        text-align: center;
        font-weight: bold;
      }

      h1 {
        font-family: ${font.family.display};
        font-size: 3.7rem;
      }

      h2 {
        margin-top: 8px;
        font-family: ${font.family.heading};
        font-size: 0.7rem;
        text-transform: uppercase;
      }
    }

    hr {
      box-sizing: border-box;
      margin: 0;
      width: 100%;
      border: 24px solid white;
      border-radius: 12px 12px 0 0;
      border-top-color: white;
      border-bottom-width: 0;
    }
  }

  main {
    flex: 1;
    display: flex;
    align-items: flex-end;
    ${media.tablet} {
      align-items: flex-start;
    }
  }
`;

export default WelcomeViewLayout;
