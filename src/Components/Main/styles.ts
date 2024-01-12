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
`;

export const Container = styled.div`
  /* Estilos para o container aqui */
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
  background-color: #7994a5;
  margin: 5rem 0;
  letter-spacing: -0.05rem;
`;

export const FeaturetteImage = styled.svg`
  /* Estilos para as imagens dos featurettes aqui */
`;

export const Footer = styled.footer`
  /* Estilos para o footer aqui */
  background-color: #7994a5;
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
