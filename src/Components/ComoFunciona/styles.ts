import styled from "styled-components";

export const MainWrapper = styled.main`
  /* Estilos para a tag main aqui, se necessário */
  background-color: #7994a5;
  body {
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: rgb(var(--bs-tertiary-color-rgb));
  }
`;
export const TitleComoFunciona = styled.h1`
  padding: 3rem;
  font-size: 3em;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
`;
export const HrDivider = styled.hr`
  background-color: white !important;
  height: 1px;
  border: none;
`;
export const MarketingContainer = styled.div`
  /* Estilos para o container de marketing aqui */

  margin-bottom: 1.5rem;
  text-align: center;

  & p {
    margin-right: 0.75rem;
    margin-left: 0.75rem;
  }
  /* rtl:end:ignore */
`;

export const Column = styled.div`
  margin-top: 2rem;
  background-color: #7994a5;
  text-align: center;
`;

export const Featurette = styled.div`
  /* Estilos para os featurettes aqui */
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 5px;
  background-color: #7994a5;
  margin: 5rem 0;
  letter-spacing: -0.05rem;
  color: white;
`;

export const FeaturetteImage = styled.svg`
  /* Estilos para as imagens dos featurettes aqui */
`;

export const CustomButton = styled.a`
  background-color: #98d1b1;
  /* Adicione outros estilos necessários */
`;
export const BackToTop = styled.p`
  &.float-end {
    a {
      display: inline-flex;
      align-items: center;
      font-size: 2rem; // Ajuste o tamanho conforme necessário
    }
  }
`;
export const ContainerDivider = styled.div`
  background-color: #333;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 auto;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1200px; /* Limita a largura do contêiner */
  margin: 0 auto; /* Centraliza o contêiner na página */
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 0; /* Ajuste conforme necessário */
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: #212529; /* Ajuste conforme necessário */
`;

export const CompanyName = styled.span`
  color: white;
  margin-left: 10px; /* Ajuste conforme necessário */
`;

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto; /* Empurra os itens sociais para a direita */
`;

export const SocialItem = styled.li`
  margin-left: 20px; /* Ajuste conforme necessário */
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: white; /* Ajuste conforme necessário */
`;
