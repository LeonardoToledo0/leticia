import logoImage from "../../Assets/Imagens/logo-leticia.png";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Instagram, Facebook, Whatsapp } from "react-bootstrap-icons";
import InputMask from "react-input-mask";

import * as S from "./styles";

export const Contato: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <S.Box>
        <S.BoxTotal>
          <S.BoxForm>
            <S.BoxFormTitle>
              <S.TitleContent>
                <b>Contato</b>
              </S.TitleContent>

              <S.InputBox>
                <S.InputUser type="text" id="nome" placeholder="" required />
                <S.InputLabel htmlFor="nome">
                  <br />
                  <b>Nome</b>
                </S.InputLabel>
              </S.InputBox>
              <br />
              <br />
              <S.InputBox>
                <S.InputUser type="email" id="email" placeholder="" required />
                <S.InputLabel htmlFor="email">
                  <br />
                  <b>E-mail</b>
                </S.InputLabel>
              </S.InputBox>
              <S.InputBox>
                <br />
                <br />
                <S.InputUser type="tel" id="" placeholder="" required />
                <S.InputLabel htmlFor="telefone">
                  <br />
                  <br />
                  <br />
                  <b>Telefone</b>
                </S.InputLabel>
              </S.InputBox>
              <S.InputBox>
                <br />
                <br />
                <S.InputUser type="text" id="" placeholder="" required />
                <S.InputLabel htmlFor="Mensagem">
                  <br />
                  <br />
                  <br />
                  <b>Mensagem</b>
                </S.InputLabel>
              </S.InputBox>
              <br />
              <br />
              <S.InputBox>
                <br />
                <br />
                <S.InputLabel htmlFor="dataConsulta"></S.InputLabel>
                {/* Substitua S.InputUser por DatePicker */}
                <DatePicker
                  id="dataConsulta"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Data da Consulta"
                  required
                  customInput={
                    <S.InputUser
                      style={{
                        color: "white",
                        width: "100%",
                      }}
                    />
                  }
                />
              </S.InputBox>
              <br />
              <br />
              <S.ButtonSubmit type="submit">
                <b>Enviar</b>
              </S.ButtonSubmit>
            </S.BoxFormTitle>
          </S.BoxForm>
        </S.BoxTotal>
      </S.Box>
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
