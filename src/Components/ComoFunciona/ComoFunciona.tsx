import React from "react";
import * as S from "./styles";
import logoImage from "../../Assets/Imagens/logo-leticia.png";
import cirurgia from "../../Assets/Imagens/cirurgia.png";
import silvestre from "../../Assets/Imagens/silvestre.jpg";
import emergencia from "../../Assets/Imagens/emergencia.jpg";
import sevicos from "../../Assets/Imagens/servicos.jpg";
import domiciliar from "../../Assets/Imagens/domiciliar.jpg";
import pagamento from "../../Assets/Imagens/pagamento.jpg";
import rx from "../../Assets/Imagens/RX.jpg";
import { Instagram, Facebook, Whatsapp } from "react-bootstrap-icons";
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

export const ComoFunciona: React.FC = () => {
  return (
    <>
      <S.MainWrapper>
        <S.TitleComoFunciona>Como Funciona</S.TitleComoFunciona>

        <S.MarketingContainer className="container marketing">
          <S.Featurette className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Quais serviços são oferecidos?
                <br />
              </h2>
              <br />

              <p className="lead">
                Ofereço atendimento veterinário domiciliar, dedicando-me a
                proporcionar cuidados que abrangem desde vacinações até a
                realização de exames hematológicos.
              </p>
              <br />
            </div>
            <div className="col-md-5">
              <FeaturetteImage
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={sevicos}
                alt="Descrição da sua imagem"
              />
            </div>
          </S.Featurette>

          <S.HrDivider />

          <S.Featurette className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oferece serviços de realização de exames de imagem?
                <br />
              </h2>
              <br />
              <p className="lead">
                Certos procedimentos diagnósticos demandam equipamentos e
                competências especializadas. Diante disso, aconselha-se buscar a
                realização desses exames de imagem com profissionais
                qualificados para assegurar a precisão e confiabilidade dos
                resultados.
              </p>
              <br />
            </div>
            <div className="col-md-5 order-md-1">
              <FeaturetteImage
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={rx}
                alt="Descrição da sua imagem"
              />
            </div>
          </S.Featurette>

          <S.HrDivider />

          <S.Featurette className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Oferece assistência em situações emergenciais?
                <br />
              </h2>
              <br />

              <p className="lead">
                Não. Meus atendimentos são estritamente realizados mediante
                agendamento. Caso seu animal tenha sofrido algum trauma ou
                apresente sintomas de envenenamento, intoxicação, desmaios ou
                convulsões, recomendo encaminhá-lo sem demora a uma clínica
                veterinária. Nesses casos, a assistência imediata, realização de
                exames e, eventualmente, a possibilidade de internação são
                procedimentos cruciais para garantir a saúde e bem-estar do seu
                animal de estimação.
              </p>
              <br />
            </div>
            <div className="col-md-5">
              <FeaturetteImage
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={emergencia}
                alt="Descrição da sua imagem"
              />
            </div>
          </S.Featurette>

          <S.HrDivider />
          <S.Featurette className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oferece assistência a animais silvestres e exóticos?
                <br />
              </h2>
              <br />
              <p className="lead">
                Minha atuação se concentra exclusivamente no atendimento de cães
                e gatos.
              </p>
              <br />
            </div>
            <div className="col-md-5 order-md-1">
              <FeaturetteImage
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={silvestre}
                alt="Descrição da sua imagem"
              />
            </div>
          </S.Featurette>

          <S.HrDivider />
          <S.Featurette className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Realiza procedimentos cirúrgicos?
                <br />
              </h2>
              <br />

              <p className="lead">
                Certamente! Caso seu animal necessite de algum procedimento
                cirúrgico, agradeço se puder agendar uma avaliação. Nessa
                consulta, estarei disponível para oferecer orientações
                detalhadas sobre exames prévios, tratamentos pré e
                pós-operatórios. Importante mencionar que os procedimentos
                cirúrgicos são realizados em clínicas parceiras, proporcionando
                um ambiente especializado e seguro para o cuidado necessário.
              </p>
              <br />
            </div>
            <div className="col-md-5">
              <FeaturetteImage
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={cirurgia}
                alt="Descrição da sua imagem"
              />
            </div>
          </S.Featurette>

          <S.HrDivider />
          <S.Featurette className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Quais as formas de pagamento?
                <br />
              </h2>
              <br />
              <p className="lead">
                Aceitamos pagamento em dinheiro, cartões de crédito e débito,
                além de transferência bancária por meio do PIX.
              </p>
              <br />
            </div>
            <div className="col-md-5 order-md-1">
              <FeaturetteImage
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={pagamento}
                alt="Descrição da sua imagem"
              />
            </div>
          </S.Featurette>

          <S.HrDivider />
          <S.Featurette className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Qual é o endereço da clínica?
                <br />
              </h2>
              <br />

              <p className="lead">
                Não possuo uma clínica física, realizo exclusivamente
                atendimento domiciliar
              </p>
              <br />
            </div>
            <div className="col-md-5">
              <FeaturetteImage
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={domiciliar}
                alt="Descrição da sua imagem"
              />
            </div>
          </S.Featurette>

          {/* /END THE FEATURETTES */}
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
    </>
  );
};
