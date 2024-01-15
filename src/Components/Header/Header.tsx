// Importe os componentes do BootstrapIcons e os estilos

import React, { useState, useEffect } from "react";
import * as S from "./styles";
import logoImage from "../../Assets/Imagens/logo-leticia.png";
import {
  HandIndexThumb,
  HouseDoor,
  MenuButtonWide,
  HeartPulse,
  Phone,
} from "react-bootstrap-icons";

export const HeaderComponent: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <S.HeaderContainer>
      <S.TopBar className="px-3 py-2 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <S.LogoLink
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <span>
                <img src={logoImage} alt="" width="65" height="65" />
              </span>
            </S.LogoLink>

            <S.Navigation className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <S.NavItem>
                {windowWidth > 800 && (
                  <S.NavLink
                    href="/"
                    className="nav-link "
                    hovered={hovered}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <HouseDoor size={24} />
                    <span>Home</span>
                  </S.NavLink>
                )}
              </S.NavItem>
              <S.NavItem>
                {windowWidth > 800 && (
                  <S.NavLink
                    href="/como-funciona"
                    className="nav-link "
                    hovered={hovered}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <HandIndexThumb size={24} />
                    Como Funciona
                  </S.NavLink>
                )}
              </S.NavItem>
              <S.NavItem>
                {windowWidth > 800 && (
                  <S.NavLink
                    href="#"
                    className="nav-link "
                    hovered={hovered}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <HeartPulse size={24} />
                    Cuidados Animais
                  </S.NavLink>
                )}
              </S.NavItem>
              <S.NavItem>
                {windowWidth > 800 && (
                  <S.NavLink
                    href="#"
                    className="nav-link "
                    hovered={hovered}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Phone size={24} />
                    Contato
                  </S.NavLink>
                )}
              </S.NavItem>
              <S.NavItem>
                {window.innerWidth <= 800 && (
                  <S.NavLink
                    href="#"
                    className="nav-link "
                    hovered={hovered}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <MenuButtonWide size={24} />
                    Menu
                  </S.NavLink>
                )}
              </S.NavItem>
            </S.Navigation>
          </div>
        </div>
      </S.TopBar>
    </S.HeaderContainer>
  );
};
