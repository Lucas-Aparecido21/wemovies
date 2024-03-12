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
  input {
    width: 62px;
    height: 26px;
  }
`;

export const ButtonQTD = styled.button`
  all: unset;
  width: 18px;
  height: 18px;
  color: #009edd;
`;
export const DivValue = styled.div``;

export const DivExclude = styled.div`
  button {
    all: unset;
    width: 18px;
    height: 18px;
  }
`;
