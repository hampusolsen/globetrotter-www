import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import Modal from "../components/common/wrappers/Modal";

const SpinnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  height: 56px;
  width: 104px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const bouncyBallColors = ["red", "blue", "green", "orange", "purple"];

const bouncyBallAnimation = keyframes`
  0%   { transform: scale(1,1)        translateY(0); }
  10%  { transform: scale(1.05,.95)   translateY(0); }
  30%  { transform: scale(.95,1.05)   translateY(-50%); }
  50%  { transform: scale(1.05,.85)   translateY(0); }
  78%  { transform: scale(1,1)        translateY(0); }
  100% { transform: scale(1,1)        translateY(0); }
`;

const BouncyBall = styled.div<{ index: number; color: string }>`
  height: 12px;
  width: 12px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  animation: 1.2s ${({ index }) => index * 0.15}s ${bouncyBallAnimation}
    infinite alternate;
  animation-timing-function: cubic-bezier(0.28, 0.35, 0.8, 1);
`;

const LoadingOverlay: React.FC = () => {
  return ReactDOM.createPortal(
    <Modal>
      <SpinnerWrapper>
        <Spinner>
          {bouncyBallColors.map((color, index) => (
            <BouncyBall key={color} index={index} color={color} />
          ))}
        </Spinner>
      </SpinnerWrapper>
    </Modal>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("root")!
  );
};

export default LoadingOverlay;
