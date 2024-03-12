import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  background-color: #2f2e41;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Colunas responsivas */
  gap: 20px; /* Espaçamento entre os cards */
  justify-content: center; /* Centraliza os elementos horizontalmente */

  @media (min-width: 768px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Define três colunas por linha em telas maiores */
  }
`;
