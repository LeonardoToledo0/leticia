// globalStyles.js
import { createGlobalStyle } from "styled-components";
/* styles.css */

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700;1,800&display=swap');


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(#98d1b1, #7994a5);
    font-family: "Poppins", sans-serif;
  }

  /* Adicione outros estilos globais conforme necessário */
`;
