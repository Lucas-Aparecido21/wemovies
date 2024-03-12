import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
  margin-top: 80px;
  width: 55.41px;
  height: 55.41px;
  border: 2px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 1s linear infinite;
`;
