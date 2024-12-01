import { useState } from "react";
import { Container } from "react-bootstrap";
import { BarraNavegacion } from "./components/BarraNavegacion";
import { PaginaContador } from "./pages/PaginaContador";
import { PaginaDestino } from "./pages/PaginaDestino";

export const App = () => {
  const [paginaActual, setPagina] = useState("Landing");

  const mapearPagina = {
    Landing: <PaginaDestino/>,
    Counter: <PaginaContador/>,
  };

  return (
    <>
      <BarraNavegacion paginaActual={paginaActual} setPagina={setPagina} />
      <Container>{mapearPagina[paginaActual]}</Container>
    </>
  );
};