import { useState } from "react";
import luzOn from "../img/on.jpg";
import luzOff from "../img/off.jpg";
import botonOn from "../img/bon.jpg";
import botonOff from "../img/boff.jpg";
import "../css/luz.css";

export const Luz = () => {
  const [start, setStart] = useState(luzOff);
  const [bstart, setBstart] = useState(botonOff);
  const [state, setState] = useState(false);

  const handleButton = () => {
    if (!state) {
      setStart(luzOn);
      setBstart(botonOn);
      setState(true);
    } else {
      setStart(luzOff);
      setBstart(botonOff);
      setState(false);
    }
  };
  return (
    <div className="container-bombillo">
      <img className="bombillo" src={start} alt="Imagen" />
      <img className="boton" src={bstart} alt="Boton" onClick={handleButton} />
    </div>
  );
};
