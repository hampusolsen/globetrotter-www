import styled from "styled-components";
import {
  color,
  font,
  media
} from "../../../../resources/style/variables.style";

const StyledAuthSection = styled.section`
  margin: 0 auto;
  ${media.tablet} {
    width: 700px;
  }

  > div:first-of-type {
    background-color: white;
    margin: 0 auto 1px;
    border-bottom: 1px solid transparent;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    ${media.tablet} {
      width: 500px;
      padding: 42px 52px;
    }

    &::before {
      content: "";
      position: absolute;
      right: -100px;
      bottom: -2px;
      z-index: -1;
      height: 100%;
      width: calc(100% + 200px);
      border-bottom: 1px solid;
      border-image: linear-gradient(
          90deg,
          transparent,
          ${color.grey},
          transparent
        )
        1;
      background-image: radial-gradient(
        ellipse at bottom,
        rgba(0, 0, 0, 0.35),
        transparent 63%
      );
      background-position-y: 0;
      background-repeat: no-repeat;
    }

    > button {
      display: none;
      ${media.tablet} {
        margin-bottom: 60px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: ${color.lightgreen};
        background: none;
        outline: none;
        border: none;
        cursor: pointer;

        h3 {
          font-weight: bold;
          font-family: ${font.family.display};
          font-size: 2.1rem;
        }

        small {
          font-family: ${font.family.bread};
        }
      }
    }

    h2 {
      font-family: ${font.family.heading};
      padding-left: 24px;
      ${media.tablet} {
        padding: 0;
      }
    }

    form {
      width: 100vw;
      padding: 0 24px 36px;
      box-sizing: border-box;
      ${media.tablet} {
        width: auto;
        padding: 0;
      }

      label {
        display: flex;
        position: relative;
        align-items: center;
        border-radius: 4px;
        border: 1px solid grey;
        background-color: ${color.lightgrey};
        height: 36px;
        margin: 32px 0;
        box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.08),
          -2px -2px 5px 0 rgba(0, 0, 0, 0.12);
        font-weight: bold;
        letter-spacing: 1px;
        font-weight: bold;

        &::placeholder {
          font-weight: bold;
          letter-spacing: 1px;
          font-size: 1rem;
        }

        &:first-of-type {
          margin-top: 16px;
        }

        svg {
          margin: 0 8px;
          fill: grey;
          height: 20px;
          min-width: 24px;
        }

        input {
          background: none;
          outline: none;
          border: none;
          flex: 1;
          color: grey;
          font-family: ${font.family.heading};

          &::placeholder {
            font-family: ${font.family.heading};
            opacity: 0.7;
          }

          &:focus::placeholder {
            visibility: hidden;
          }
        }

        &.error {
          border-color: red;

          input {
            color: red;
            &::placeholder {
              color: red;
            }
          }

          svg {
            fill: red;
          }

          span {
            position: absolute;
            color: red;
            width: 100%;
            bottom: -16px;
            left: 4px;
            font-size: 0.65rem;
            font-family: ${font.family.bread};
            font-weight: normal;
          }
        }
      }

      button {
        width: 100%;
      }
    }
  }

  > div:last-of-type {
    background-color: ${color.lightgrey};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    padding: 36px 0 24px;
    ${media.tablet} {
      padding: 48px 0 36px;
      width: 500px;
    }

    &::before {
      content: "OR";
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border: 1px solid ${color.grey};
      height: 37px;
      width: 37px;
      border-radius: 50%;
      font-family: ${font.family.heading};
      position: absolute;
      top: -19px;
      left: 50%;
      transform: translateX(-50%);
    }

    a {
      display: flex;
      width: 240px;
      height: 36px;
      padding: 0;
      margin: 0;
      border: none;
      outline: none;
      background: none;
      text-decoration: none;

      &:first-of-type {
        margin-bottom: 4px;

        span {
          background-color: ${color.red};
        }
      }

      &:last-of-type span {
        background-color: ${color.blue};

        svg {
          height: 18px;
        }
      }

      span {
        display: flex;
        fill: white;
        color: white;
        height: 36px;
        align-items: center;

        &:first-of-type {
          width: 36px;
          margin-right: 4px;
          justify-content: center;
        }

        &:last-of-type {
          flex-grow: 1;
          padding: 0 8px;
          font-size: 0.75rem;
          font-family: ${font.family.heading};
        }
      }
    }
  }
`;

export default StyledAuthSection;
