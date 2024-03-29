import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100%;
  height: 100%;
  background-color: #2f2e41;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCard = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 24px;
  margin-bottom: 40px;
  justify-content: center;
  width: 100%;
  max-width: 1080px;

  @media (max-width: 764px) {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
  }
`;
