import logoImage from "../../Assets/Imagens/logo-leticia.png";
import { Instagram, Facebook, Whatsapp } from "react-bootstrap-icons";
import * as S from "./styles";
export const Sobre: React.FC = () => {
  return (
    <>
      <S.SobreDiv></S.SobreDiv>
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
    </>
  );
};
