import styled from "styled-components";

export const MainWrapper = styled.main`
  background-color: #7994a5;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que o conteúdo se estenda até o rodapé */

  body {
    background-color: #7994a5;
    margin: 0; /* Remove a margem padrão do body */
    padding: 3rem; /* Adicionei o padding diretamente aqui para ocupar toda a altura */
    box-sizing: border-box; /* Garante que o padding seja incluído no tamanho total do elemento */
    color: rgb(var(--bs-tertiary-color-rgb));
  }
`;
export const HrDivider = styled.hr`
  background-color: white !important;
  height: 1px;
  border: none;
`;

export const Carousel = styled.div`
  /* CUSTOMIZE THE CAROUSEL


/* Carousel base class */
  .carousel {
    margin-bottom: 4rem;
  }
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    bottom: 3rem;
    z-index: 10;
  }

  /* Declare heights because of positioning of img element */
  .carousel-item {
    height: 32rem;
  }
  & img {
    object-fit: cover;
    width: 100%;
    height: 32rem;
  }
  @media (min-width: 40em) {
    /* Bump up size of carousel content */
    .carousel-caption p {
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }

    .featurette-heading {
      font-size: 50px;
    }
  }

  @media (min-width: 62em) {
    .featurette-heading {
      margin-top: 7rem;
    }
  }
`;

export const CarouselItem = styled.div`
  /* Estilos para os itens do carousel aqui */
  background-color: #7994a5;
`;

export const Container = styled.div`
  /* Estilos para o container aqui */
  background-color: #7994a5;
`;

export const MarketingContainer = styled.div`
  /* Estilos para o container de marketing aqui */
  background-color: #7994a5;
  margin-bottom: 0;
  text-align: center;
`;

export const Column = styled.div`
  margin-top: 2rem;
  background-color: #7994a5;
  text-align: center;
`;

export const Featurette = styled.div`
  /* Estilos para os featurettes aqui */
  background-color: #7994a5;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 5px;

  background-color: #7994a5;
  margin: 5rem 0;
  letter-spacing: -0.05rem;
`;

export const FeaturetteImage = styled.svg`
  background-color: #7994a5;
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
