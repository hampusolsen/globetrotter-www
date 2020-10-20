import styled from "styled-components";
import {
  calcViewHeight,
  color,
  font,
  media
} from "../../../resources/style/variables.style";

const WelcomeLayout = styled.div`
  position: relative;
  ${media.phone} {
    height: ${calcViewHeight(100)}px;
  }

  header {
    position: relative;
    background-color: ${color.darkblue};
    overflow: hidden;
    height: ${calcViewHeight(55)}px;

    button {
      position: absolute;
      right: 24px;
      top: 24px;
    }

    svg:nth-of-type(1) {
      position: absolute;
      height: 70%;
      bottom: 0;
      ${media.phone} {
        transform: translateX(-25%);
      }
    }

    svg:nth-of-type(2) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 45%;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    background-color: white;
    ${media.phone} {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50%;
      border-radius: 20px 20px 0 0;
    }

    div {
      position: relative;

      span {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        background-color: white;
        border-radius: 50%;
        border: 1px solid ${color.grey};
        padding: 12px;
        font-family: ${font.heading.family};
      }

      hr {
        width: 100vw;
        margin: 0;
        border-top-width: 1px;
        border-bottom-width: 0;
        border-style: solid;
        border-color: black;
        border-image: linear-gradient(
            to right,
            white,
            white,
            ${color.grey},
            white,
            white
          )
          100;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      background-color: ${color.lightgrey};
      padding: 38px 24px 24px;

      button {
        width: 40%;
        display: inline;
      }
    }
  }
`;

export default WelcomeLayout;
