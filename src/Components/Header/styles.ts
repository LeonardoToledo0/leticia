import styled from "styled-components";

interface HeaderContainerProps {}

interface TopBarProps {}

interface LogoLinkProps {}

interface NavigationProps {}

interface NavItemProps {}

interface NavLinkProps {
  hovered: boolean;
  size?: number;
}

export const HeaderContainer = styled.header<HeaderContainerProps>``;

export const TopBar = styled.div<TopBarProps>`
  background-color: #98d1b1;
  .text-small {
    font-size: 85%;
  }

  .dropdown-toggle:not(:focus) {
    outline: 0;
  }
`;

export const LogoLink = styled.a<LogoLinkProps>``;

export const Navigation = styled.ul<NavigationProps>``;

export const NavItem = styled.li<NavItemProps>``;

export const NavLink = styled.a<NavLinkProps>`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    color: #7994a5;
  }
`;
