import React from "react";
import { HeaderComponent } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { ComoFunciona } from "./Components/ComoFunciona/ComoFunciona";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { Contato } from "./Components/Contato/Contato";
import { Sobre } from "./Components/Sobre/Sobre";

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <Main />
    </>
  );
};

const ComoFuncionaPage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <ComoFunciona />
    </>
  );
};
const ContatoPage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <Contato />
    </>
  );
};
const SobrePage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <Sobre />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Adicione a seguinte linha para a rota ComoFuncionaPage */}
        <Route path="/como-funciona" element={<ComoFuncionaPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
