import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
`

export const NavLinkStyled = styled(NavLink)`
  font-weight: 600;
  color: #201e1e;
  text-decoration: none;

  transition: 300ms;

  &:hover {
    color: #585252;
  }
`