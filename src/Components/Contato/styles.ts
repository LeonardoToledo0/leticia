import styled from "styled-components";


export const Box = styled.div`
  background-image: linear-gradient(#98d1b1, #7994a5);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Playfair Display", serif;
  margin: 0;
  box-sizing: border-box;
  color: rgb(var(--bs-tertiary-color-rgb));
  & & h1,
  & h3 {
    font-family: "Playfair Display", serif;
    font-style: italic;
  }

  @media (max-width: 768px) {
    /* Ajuste os estilos para telas menores conforme necessário */
    padding: auto;
  }
`;
export const BoxTotal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 15px;
  border-radius: 15px;
  width: 50%;
  @media (max-width: 800px) {
    width: 90%;
    margin-top: 150px;
  }
`;
export const BoxForm = styled.form`
  color: white;
  width: 100%;
`;
export const BoxFormTitle = styled.fieldset`
  padding: 2rem 2rem;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;
export const TitleContent = styled.h1`
  text-align: center;

  padding: 10px;
  color: white;
  background-color: transparent;
`;
export const InputBox = styled.div`
  position: relative;
`;
export const InputLabel = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  pointer-events: none;
  transition: 0.5s;
`;

export const InputLabel2 = styled.label``;
export const InputField = styled.input``;

export const InputUser = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  color: white;
  font-size: 18px;
  width: 100%;
  letter-spacing: 2px;

  &:focus + ${InputLabel}, &:valid + ${InputLabel} {
    top: -50px;
    font-size: 14px;
    color: #7994a5;
  }
`;
export const SelectoParagraf = styled.p`
  color: white;
`;

export const ButtonSubmit = styled.button`
  background-color: #7994a5;
  width: 100%;
  border: none;
  border-radius: 15px;
  padding: 15px;
  color: white;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #638b97;
  }
`;

export const ContainerDivider = styled.div`
  background-color: #333;
  width: 100%;
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
  margin: auto 25px;

  margin-right: auto;
`;

export const CompanyName = styled.span`
  color: white;
  margin-left: 10px; /* Ajuste conforme necessário */
`;

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin: 10px auto;
  padding: 10px;
  margin-left: auto; /* Empurra os itens sociais para a direita */
`;

export const SocialItem = styled.li`
  margin-left: 30px; /* Ajuste conforme necessário */
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: white; /* Ajuste conforme necessário */
`;
