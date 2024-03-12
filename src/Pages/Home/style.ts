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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 16px;
  row-gap: 24px;
  margin-bottom: 40px;
  justify-content: center;

  @media (min-width: 1015px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 16px;
  }
`;
