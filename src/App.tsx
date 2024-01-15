import React from "react";
import { HeaderComponent } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { ComoFunciona } from "./Components/ComoFunciona/ComoFunciona";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Adicione a seguinte linha para a rota ComoFuncionaPage */}
        <Route path="/como-funciona" element={<ComoFuncionaPage />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
