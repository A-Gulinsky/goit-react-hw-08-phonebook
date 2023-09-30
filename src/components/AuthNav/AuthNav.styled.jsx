import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Ul = styled.ul`
  display: flex;
  gap: 20px;

  padding-right: 20px;
`

export const NavLinkStyled = styled(NavLink)`
  color: #201e1e;
  text-decoration: none;
  font-weight: 600;

  transition: 300ms;

  &:hover {
    color: #585252;
  }
`