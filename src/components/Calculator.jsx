import React from "react";
import calculadoraimg from "../img/calculadoraimg.png";
import { Botones } from "./Botones";
import styled from "styled-components";

const ContenedorCalculadora = styled.div`
  position: relative;
`;

export const Calculator = () => {
  return (
    <>
      <ContenedorCalculadora>
        <img
          className="imagenCalculadora"
          src={calculadoraimg}
          alt="Calculadora"
          height={700}
        />
        <Botones />
      </ContenedorCalculadora>
    </>
  );
};
