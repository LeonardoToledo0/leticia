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
export const Headercell = styled.div`

`
export const Headercell2= styled.div``

export const TopBar = styled.div<TopBarProps>`
  background-color: #98d1b1;
  .text-small {
    font-size: 85%;
  }

  .dropdown-toggle:not(:focus) {
    outline: 0;
  }
  
`;

export const LogoLink = styled.a<LogoLinkProps>`
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Adicione margin para separar os elementos */
    & > * {
      margin: 0 100px; /* Ajuste a margem conforme necessário */
    }
  }
`;

export const Navigation = styled.ul<NavigationProps>``;

export const NavItem = styled.li<NavItemProps>``;

export const NavLink = styled.a<NavLinkProps>`
  font-family: "Playfair Display", serif;
  font-style: italic;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
  font-family: "Playfair Display", serif;

  &:hover {
    color: #7994a5;
  }
`;
