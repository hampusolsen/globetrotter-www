import styled, { keyframes } from "styled-components";
import { centerCenter } from "../../../../../../../resources/style/css.style";
import { color } from "../../../../../../../resources/style/variables.style";

export const fadeInAnimation = keyframes`
  from { background-color: #00000000 }
  to { background-color: #00000015 }
`;

export const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px);
  } to {
    opacity: 1;
    transform: translateY(-32px);
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000015;
  animation: ${fadeInAnimation} 500ms;
`;

export const Wrapper = styled.div`
  animation: ${slideInAnimation} 125ms ease-out forwards;
`;

export const Card = styled.div<{ active: boolean }>`
  ${({ active }) => `
    height: ${active ? "100vh" : "280px"};
    width: ${active ? "100%" : "220px"};
  `};
  border-radius: 14px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px 0 #00000035;
  overflow: hidden;
  transition: all 0.2s ease-out;
  margin: 0 auto;
`;

export const Carousel = styled.section<{
  active: boolean;
  translation: number;
}>`
  ${({ active }) => `flex: 0 0 ${active ? 100 : 50}%`};
  transition: flex 0.2s ease-out;
  overflow: hidden;
  position: relative;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    ${({ translation }) => `transform: translateX(-${translation}%)`};
    transition: 200ms ease-out;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 14px;
    }
  }

  p {
    position: absolute;
    ${({ active }) => `top: ${active ? 44 : 14}px;`}
    right: 14px;
    font-size: 11px;
    height: 24px;
    width: 24px;
    background-color: ${color.darkgrey}80;
    border-radius: 50%;
    color: ${color.smokewhite};
    ${centerCenter}
    transition: top 0.2s ease-out;
    z-index: 10;
  }

  @media (hover: hover) and (pointer: fine) {
    -ms-touch-action: none;
    touch-action: none;
  }
`;

export const Content = styled.article`
  flex: 1;
  padding: 0 14px;
  overflow: hidden;

  p {
    font-size: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0 8px;
`;

export const Footer = styled.footer`
  flex: 0 0 48px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h3 {
    margin-right: 8px;
  }
`;
