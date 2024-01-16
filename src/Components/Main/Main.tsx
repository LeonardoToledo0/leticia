import React from "react";
import * as S from "./styles";
import logoImage from "../../Assets/Imagens/logo-leticia.png";
import imagemVet1 from "../../Assets/Imagens/Vet-gato.jpg";
import imagemVet2 from "../../Assets/Imagens/vet-mao.jpg";
import imagemVet3 from "../../Assets/Imagens/vet-cao.jpg";
import curativo from "../../Assets/Imagens/curativo.png";
import vacina from "../../Assets/Imagens/vacina.png";
import consulta from "../../Assets/Imagens/consulta.png";
import medicamentos from "../../Assets/Imagens/medicamentos.png";
import veterinario from "../../Assets/Imagens/veterinario.png";
import geriatrico from "../../Assets/Imagens/geriatrico.png";
import parasita from "../../Assets/Imagens/parasita.png";
import exame from "../../Assets/Imagens/exame.png";
import saude from "../../Assets/Imagens/saude.png";
import {
  CaretUpSquareFill,
  Instagram,
  Facebook,
  Whatsapp,
} from "react-bootstrap-icons";

interface FeaturetteImageProps {
  className: string;
  src: string;
  alt: string;
}

const FeaturetteImage: React.FC<FeaturetteImageProps> = ({
  className,
  src,
  alt,
}) => <img className={className} src={src} alt={alt} />;

const carouselItems = [
  {
    src: imagemVet1,
    alt: "Descrição da imagem 1",
    caption: {
      title: "Manchete de Exemplo 1",
      text: "Algum conteúdo representativo de espaço reservado para o primeiro slide do carrossel.",
      alignment: "text-start",
    },
  },
  {
    src: imagemVet2,
    alt: "Descrição da imagem 2",
    caption: {
      title: "Manchete de Exemplo 2",
      text: "Algum conteúdo representativo de espaço reservado para o segundo slide do carrossel.",
      alignment: "",
    },
  },
  {
    src: imagemVet3,
    alt: "Descrição da imagem 3",
    caption: {
      title: "Manchete de Exemplo 3",
      text: "Algum conteúdo representativo de espaço reservado para o terceiro slide do carrossel.",
      alignment: "text-end",
    },
  },
];

const featuretteColumns = [
  {
    image: consulta,
    title: "Consultas",
    text: "Consultas de rotina ou checkup, pediátrica, geriátrica ou com especialista. Incluso um retorno em até 30 dias, suporte do veterinário.",
  },
  {
    image: veterinario,
    title: " Higiene",
    text: "Proporcione ao seu pet um ambiente seguro e saudável com nossos serviços especializados, abrangendo escovação e limpeza de orelhas.",
  },
  {
    image: geriatrico,
    title: "Monitoramento",
    text: "Observamos de perto o comportamento, apetite e atividade física do seu pet, garantindo detecção precoce e cuidados dedicados para sua felicidade e bem-estar.",
  },
  {
    image: medicamentos,
    title: " Medicamentos",
    text: "Via: oral, subcutânea e intramuscular. Para medicamentos simples, é necessário comprá-los antes da consulta.",
  },
  {
    image: vacina,
    title: "Vacinas",
    text: "Cães: V8, V10, antirrábica, gripe e giárdia. Gatos: V3, V4, V5 e antirrábica. Para aplicação de vacinas você não paga a consulta.",
  },
  {
    image: curativo,
    title: "Curativos",
    text: "Curativos ou imobilização pós-traumáticas e manutenções pós-cirúrgica. Os materiais são levados pelo o médico veterinário.",
  },
  {
    image: parasita,
    title: "Controle de parasitas",
    text: "Proporcionamos cuidado abrangente para o controle de parasitas, assegurando a saúde dos seus animais com soluções eficazes e personalizadas.",
  },
  {
    image: exame,
    title: "Exame Clínico",
    text: "Realizamos análises laboratoriais essenciais, coletando amostras para diagnósticos precisos e cuidados de saúde veterinária de alta qualidade.",
  },
  {
    image: saude,
    title: "Aconselhamento",
    text: "Fornecemos orientação veterinária personalizada e consultas especializadas para garantir o bem-estar ideal do seu animal de estimação.",
  },
];

export const Main: React.FC = () => {
  return (
    <S.MainWrapper>
      <S.Carousel
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={index.toString()}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <S.CarouselItem
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <FeaturetteImage
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={item.src}
                alt={item.alt}
              />
              <S.Container className="container">
                <div className={`carousel-caption ${item.caption.alignment}`}>
                  <h1>{item.caption.title}</h1>
                  <p className="opacity-75">{item.caption.text}</p>
                </div>
              </S.Container>
            </S.CarouselItem>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </S.Carousel>

      <S.MarketingContainer className="container marketing">
        <div className="row">
          {featuretteColumns.map((column, index) => (
            <S.Column key={index} className="col-lg-4">
              <FeaturetteImage
                className="bd-placeholder-img  img-fluid mx-auto"
                src={column.image}
                alt={`Descrição da imagem ${index + 1}`}
              />
              <h3 className="fw-normal">{column.title}</h3>
              <p>{column.text}</p>
            </S.Column>
          ))}
        </div>
      </S.MarketingContainer>

      <S.ContainerDivider>
        <S.FooterContainer>
          <S.LogoWrapper>
            <S.LogoLink href="/">
              <img src={logoImage} alt="Logo" width="50" height="50" />
            </S.LogoLink>
            <S.CompanyName>
              &copy; Infotoll 2020-2024. Transformando ideias em realidade.
              Todos os direitos reservados.
            </S.CompanyName>
          </S.LogoWrapper>

          <S.SocialList>
            <S.SocialItem>
              <S.SocialLink href="#">
                <Whatsapp width="24" height="24" />
              </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
              <S.SocialLink href="#">
                <Facebook width="24" height="24" />
              </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
              <S.SocialLink href="#">
                <Instagram width="24" height="24" />
              </S.SocialLink>
            </S.SocialItem>
          </S.SocialList>
        </S.FooterContainer>
      </S.ContainerDivider>
    </S.MainWrapper>
  );
};
