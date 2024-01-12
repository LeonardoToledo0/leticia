import React from "react";
import * as S from "./styles";
import imagemVet1 from "../../Assets/Imagens/Vet-gato.jpg";
import imagemVet2 from "../../Assets/Imagens/vet-mao.jpg";
import imagemVet3 from "../../Assets/Imagens/vet-cao.jpg";
import curativo from "../../Assets/Imagens/curativo.png";
import vacina from "../../Assets/Imagens/vacina.png";
import consulta from "../../Assets/Imagens/consulta.png";
import medicamentos from "../../Assets/Imagens/medicamentos.png";
import { CaretUpSquareFill } from "react-bootstrap-icons";

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
              src={consulta}
              alt="Descrição da sua imagem"
            />
            <h2 className="fw-normal">Consultas</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <S.CustomButton className="btn btn-secondary" href="#">
                View details &raquo;
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
          <S.Column className="col-lg-4">
            <FeaturetteImage
              className="bd-placeholder-img  img-fluid mx-auto"
              src={medicamentos}
              alt="Descrição da sua imagem"
            />
            <h2 className="fw-normal">Administração de medicamentos</h2>
            <p>
              Via: oral, subcutânea e intramuscular. Para medicamentos simples,
              é necessário comprá-los antes da consulta; e para mais complexos,
              o veterinário pode levar.
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

        {/* START THE FEATURETTES */}

        <hr className="featurette-divider" />

        <S.Featurette className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              First featurette heading.{" "}
              <span className="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <S.FeaturetteImage
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </S.FeaturetteImage>
          </div>
        </S.Featurette>

        <hr className="featurette-divider" />

        <S.Featurette className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, its that good.{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <S.FeaturetteImage
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </S.FeaturetteImage>
          </div>
        </S.Featurette>

        <hr className="featurette-divider" />

        <S.Featurette className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              And lastly, this one.{" "}
              <span className="text-body-secondary">Checkmate.</span>
            </h2>
            <p className="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.
            </p>
          </div>
          <div className="col-md-5">
            <S.FeaturetteImage
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
                500x500
              </text>
            </S.FeaturetteImage>
          </div>
        </S.Featurette>

        <hr className="featurette-divider" />

        {/* /END THE FEATURETTES */}
      </S.MarketingContainer>

      {/* FOOTER */}
      <S.Footer className="container">
        <S.BackToTop className="float-end">
          <a href="#">
            <CaretUpSquareFill color="#98d1b1" />
          </a>
        </S.BackToTop>
      </S.Footer>
    </S.MainWrapper>
  );
};
