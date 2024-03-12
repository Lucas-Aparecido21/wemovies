import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 338px;
  max-height: 324px;
  width: 100%;
  height: 100%;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 15px;
    width: 147px;
    height: 188px;
  }

  span {
    font-size: 12px;
    margin-top: 5px;
  }
  p {
    font-size: 16px;
    margin-top: 10px;
  }

  button {
    margin-top: 15px;
    margin-bottom: 16px;
    cursor: pointer;
    max-width: 80%;
    width: 100%;
    height: 40px;
    background-color: #009edd;
    color: #ffff;
    padding: 8px;
    border-radius: 4px;
    border: none;
  }

  @media (min-width: 764px) {
    width: 85%;
  }
`;
