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

export const Main: React.FC = () => {
  return (
    <S.MainWrapper>
      <S.Carousel
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <S.CarouselItem className="carousel-item active">
            <FeaturetteImage
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src={imagemVet1} // Substitua pelo caminho correto da sua imagem
              alt="Descrição da imagem 1"
            />
            <S.Container className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p className="opacity-75">
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <S.CustomButton className="btn btn-secondary" href="#">
                    Sing Up Today &raquo;
                  </S.CustomButton>
                </p>
              </div>
            </S.Container>
          </S.CarouselItem>
          <S.CarouselItem className="carousel-item">
            <FeaturetteImage
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src={imagemVet2} // Substitua pelo caminho correto da sua imagem
              alt="Descrição da imagem 1"
            />
            <S.Container className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <S.CustomButton className="btn btn-secondary" href="#">
                    Learn More &raquo;
                  </S.CustomButton>
                </p>
              </div>
            </S.Container>
          </S.CarouselItem>
          <S.CarouselItem className="carousel-item">
            <FeaturetteImage
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src={imagemVet3} // Substitua pelo caminho correto da sua imagem
              alt="Descrição da imagem 1"
            />
            <S.Container className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <S.CustomButton className="btn btn-secondary" href="#">
                    Browse gallery &raquo;
                  </S.CustomButton>
                </p>
              </div>
            </S.Container>
          </S.CarouselItem>
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
          <span className="visually-hidden">Previous</span>
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
          <span className="visually-hidden">Next</span>
        </button>
      </S.Carousel>

      {/* Marketing messaging and featurettes */}
      <S.MarketingContainer className="container marketing">
        {/* Three columns of text below the carousel */}

        <div className="row">
          <S.Column className="col-lg-4">
            <FeaturetteImage
              className="bd-placeholder-img  img-fluid mx-auto"
              src={consulta}
              alt="Descrição da sua imagem"
            />
            <h2 className="fw-normal">Consultas</h2>
            <p>
              Consultas de rotina ou checkup, pediátrica, geriátrica ou com
              especialista. Incluso um retorno em até 30 dias, suporte do
              veterinário.
            </p>
            <p>
              <S.CustomButton className="btn btn-secondary" href="#">
                Marque uma consulta &raquo;
              </S.CustomButton>
            </p>
          </S.Column>
          <S.Column className="col-lg-4">
            <FeaturetteImage
              className="bd-placeholder-img  img-fluid mx-auto"
              src={veterinario}
              alt="Descrição da sua imagem"
            />
            <h2 className="fw-normal">Bem estar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              quibusdam odio, minus repudiandae sit, nulla eveniet fuga animi
            </p>
            <p>
              <S.CustomButton className="btn btn-secondary" href="#">
                Marque uma consulta &raquo;
              </S.CustomButton>
            </p>
          </S.Column>
          <S.Column className="col-lg-4">
            <FeaturetteImage
              className="bd-placeholder-img  img-fluid mx-auto"
              src={geriatrico}
              alt="Descrição da sua imagem"
            />
            <h2 className="fw-normal">Aconselhamentos</h2>
            <p>
              Curativos ou imobilização pós-traumáticas e manutenções
              pós-cirúrgica. Os materiais são levados pelo o medico veterinário.
            </p>
            <p>
              <S.CustomButton className="btn btn-secondary" href="#">
                Marque uma consulta &raquo;
              </S.CustomButton>
            </p>
          </S.Column>
          <S.Column className="col-lg-4">
            <FeaturetteImage
              className="bd-placeholder-img  img-fluid mx-auto"
              src={medicamentos}
              alt="Descrição da sua imagem"
            />
            <h2 className="fw-normal"> Medicamentos</h2>
            <p>
              Via: oral, subcutânea e intramuscular. Para medicamentos simples,
              é necessário comprá-los antes da consulta.
            </p>
            <br />

            <p>
              <S.CustomButton className="btn btn-secondary" href="#">
                Marque uma consulta &raquo;
              </S.CustomButton>
            </p>
          </S.Column>
          <S.Column className="col-lg-4">
            <FeaturetteImage
              className="bd-placeholder-img  img-fluid mx-auto"
              src={vacina}
              alt="Descrição da sua imagem"
            />
            <h2 className="fw-normal">Aplicação de Vacinas</h2>
            <p>
              Cães: V8, V10, antirrábica, gripee giárdia. Gatos: V3, V4, V5 e
              antirrábica. Para aplicação de vacinas você não paga a consulta.
            </p>
            <p>
              <S.CustomButton className="btn btn-secondary" href="#">
                Marque uma consulta&raquo;
              </S.CustomButton>
            </p>
          </S.Column>
          <S.Column className="col-lg-4">
            <FeaturetteImage
              className="bd-placeholder-img  img-fluid mx-auto"
              src={curativo}
              alt="Descrição da sua imagem"
            />
            <h2 className="fw-normal">Curativos</h2>
            <p>
              Curativos ou imobilização pós-traumáticas e manutenções
              pós-cirúrgica. Os materiais são levados pelo o medico veterinário.
            </p>
            <p>
              <S.CustomButton className="btn btn-secondary" href="#">
                Marque uma consulta &raquo;
              </S.CustomButton>
            </p>
          </S.Column>
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
