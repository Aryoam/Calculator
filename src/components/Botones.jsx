import { useState } from "react";
import styled from "styled-components";
import "../css/calculadora.css";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: absolute;
  width: 355px;
  top: 334px;
  bottom: 290px;
  left: 33px;
  gap: 15px 14px;

  & .clear-display {
    background-color: #28607c;
  }

  & .clear {
    background-color: #28607c;
  }
`;

const Button = styled.button`
  border-radius: 17px;
  background-color: #2493b2;
  border: 1.7px solid #01102b;
  color: #ffffff;
  font-size: 31px;

  &:active {
    transform: translateY(1px);
  }
`;

const Pantalla = styled.div`
  position: absolute;
  background-color: #cfe2e3;
  top: 121px;
  left: 38px;
  width: 347px;
  height: 117px;
  border-radius: 6px;
  font-family: "Iceberg", cursive;
  font-size: 84px;
  line-height: 2;
  letter-spacing: -7px;
  text-align: right;
  padding-right: 5px;
`;

const Secundaria = styled.div`
  font-family: "Iceberg", cursive;
  position: absolute;
  background-color: #cfe2e3;
  width: 347px;
  left: 38px;
  top: 135px;
  z-index: 999;
  text-align: right;
  padding-right: 5px;
`;

export const Botones = () => {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [storage, setStorage] = useState("");
  const [secundaria, setSecundaria] = useState("");

  const handleNumber = (e) => {
    if (display.length < 10) {
      setDisplay(display + e.target.value);
    }
  };

  const handleClearAll = () => {
    setDisplay("");
    setSecundaria("");
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleSuma = (e) => {
    setStorage(display);
    setOperator("suma");
    setDisplay("");
    setSecundaria(display + e.target.value);
  };

  const handleResta = (e) => {
    setStorage(display);
    setOperator("resta");
    setDisplay("");
    setSecundaria(display + e.target.value);
  };

  const handleMulti = (e) => {
    setStorage(display);
    setOperator("multiplicacion");
    setDisplay("");
    setSecundaria(display + e.target.value);
  };

  const handleDivi = (e) => {
    setStorage(display);
    setOperator("dividir");
    setDisplay("");
    setSecundaria(display + e.target.value);
  };

  const handleEnd = () => {
    if (operator === "suma") {
      let resultado = (Number(storage) + Number(display)).toFixed(0);
      setDisplay(resultado);
      setSecundaria(secundaria + display);
    } else if (operator === "resta") {
      let resultado = (Number(storage) - Number(display)).toFixed(0);
      setDisplay(resultado);
      setSecundaria(secundaria + display);
    } else if (operator === "multiplicacion") {
      let resultado = (Number(storage) * Number(display)).toFixed(0);
      setDisplay(resultado);
      setSecundaria(secundaria + display);
    } else if (operator === "dividir") {
      let resultado = (Number(storage) / Number(display)).toFixed(0);
      setDisplay(resultado);
      setSecundaria(secundaria + display);
    }
  };

  return (
    <>
      <Secundaria>{secundaria}</Secundaria>
      <Pantalla>{display}</Pantalla>
      <Grid>
        <Button className="hidden"></Button>
        <Button className="hidden"></Button>
        <Button className="hidden"></Button>
        <Button className="hidden"></Button>
        <Button onClick={handleDivi} value={"/"}>
          /
        </Button>
        <Button className="hidden"></Button>
        <Button className="numero" value={7} onClick={handleNumber}>
          7
        </Button>
        <Button className="numero" value={8} onClick={handleNumber}>
          8
        </Button>
        <Button className="numero" value={9} onClick={handleNumber}>
          9
        </Button>
        <Button onClick={handleMulti} value={"*"}>
          X
        </Button>
        <Button className="hidden"></Button>
        <Button className="numero" value={4} onClick={handleNumber}>
          4
        </Button>
        <Button className="numero" value={5} onClick={handleNumber}>
          5
        </Button>
        <Button className="numero" value={6} onClick={handleNumber}>
          6
        </Button>
        <Button onClick={handleResta} value={"-"}>
          —
        </Button>
        <Button className="clear-display" onClick={handleClear}>
          C
        </Button>
        <Button className="numero" value={1} onClick={handleNumber}>
          1
        </Button>
        <Button className="numero" value={2} onClick={handleNumber}>
          2
        </Button>
        <Button className="suma" onClick={handleSuma} value={"+"}>
          +
        </Button>
        <Button className="numero" value={3} onClick={handleNumber}>
          3
        </Button>
        <Button className="clear" onClick={handleClearAll}>
          AC
        </Button>
        <Button className="numero" value={0} onClick={handleNumber}>
          0
        </Button>
        <Button className="numero" value={"."} onClick={handleNumber}>
          .
        </Button>
        <Button onClick={handleEnd}>=</Button>
      </Grid>
    </>
  );
};
