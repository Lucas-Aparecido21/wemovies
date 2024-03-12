import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  color: #ffffff;
  margin-top: 31.5px;
  margin-bottom: 31.5px;

  @media (max-width: 1015px) {
    width: 90%;
  }
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  span {
    font-size: 12px;
    font-weight: 600;
    color: #999999;
    display: flex;
    justify-content: right;
  }
`;
