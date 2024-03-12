import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2f2e41;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCart = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 293px;
  max-height: 520px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
  img {
    width: 100%;
    max-width: 295px;
    height: 307;

    @media (max-width: 1015px) {
      width: 64px;
      height: 82px;
    }
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #2f2e41;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.35;
    text-align: center;
  }

  @media (max-width: 1015px) {
    width: 90%;
  }
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  color: #999999;
  font-size: 14px;
`;

export const SubHeaderProduto = styled.div`
  max-width: 246px;
  width: 100%;
`;
export const SubHeaderQTD = styled.div`
  max-width: 348px;
  width: 100%;
`;
export const SubHeaderValue = styled.div`
  max-width: 348px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const FooterCart = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const DivFooterButton = styled.div`
  margin-bottom: 24px;
  margin-top: 24px;
  width: 100%;
`;

export const DivFooterTotal = styled.div`
  display: flex;
  width: 240px;
  height: 24px;
  margin-bottom: 24px;
  margin-top: 24px;

  justify-content: space-between;

  align-items: center;
  span {
    font-size: 14px;
    color: #999999;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 1015px) {
    width: 100%;

    justify-content: center;
    gap: 8px;
    span {
      font-size: 14px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid;
  background-color: #999999;
  margin-top: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  width: 100%;
  height: 100%;
  font-size: 12px;
  cursor: pointer;
  background-color: #009edd;
  border-radius: 4px;
  padding: 8px;
  color: #ffff;

  @media (max-width: 1015px) {
    width: 40%;
    height: 40%;
    font-size: 8px;
  }
`;
