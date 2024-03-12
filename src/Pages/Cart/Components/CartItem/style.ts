import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const DivItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  max-width: 280px;
  width: 100%;
  img {
    width: 91px;
    height: 114px;
  }
  p {
    padding: 4px;
  }
`;
export const DivQTD = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 348px;
  width: 100%;

  input {
    max-width: 62px;
    width: 100%;
    max-height: 26px;
    height: 100%;
    padding: 10px;
    font-size: 14px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;

    text-align: center;
  }
  button {
    all: unset;
    cursor: pointer;
    color: #009edd;
    display: flex;
  }
`;

export const DivValue = styled.div`
  display: flex;
  min-width: 348px;
  width: 100%;
`;

export const DivExclude = styled.div`
  button {
    all: unset;
    display: flex;
    justify-content: center;
    color: #009edd;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const DivItemMobile = styled.div`
  img {
    width: 64px;
    height: 82px;
  }
  margin-right: 8px;
`;

export const DivInfoProdutoMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  gap: 8px;
  margin-bottom: 12px;

  button {
    all: unset;
    display: flex;
    justify-content: center;
    color: #009edd;
  }
`;

export const DivQTDMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  gap: 8px;
  input {
    max-width: 62px;
    width: 100%;
    max-height: 26px;
    height: 100%;

    font-size: 14px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;

    text-align: center;
  }
  button {
    all: unset;
    cursor: pointer;
    color: #009edd;
    display: flex;
  }
`;
