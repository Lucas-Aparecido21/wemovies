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

  button {
    cursor: pointer;
    width: 100%;
    max-width: 173px;
    height: 40px;
    background-color: #009edd;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    padding: 8px;
    margin-top: 1.5rem;
  }
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px;
  color: #999999;
  font-size: 14px;
`;

export const FooterCart = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: #999999;
  margin: 10px 0;
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  width: 296px;
  height: 40px;
  font-size: 12px;
  cursor: pointer;
  background-color: #009edd;
  border-radius: 4px;
  padding: 8px;
  color: #ffff;
`;
