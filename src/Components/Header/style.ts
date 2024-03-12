import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  color: #ffffff;
  margin-top: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  cursor: pointer;
`;
