import { useState } from "react";
import "../css/circulos.css";

export const Circulos = () => {
  let color;
  const [ball, setBall] = useState(false);
  if (!ball) {
    color = {
      backgroundColor: "#e1e1e1",
    };
  } else {
    color = {
      backgroundColor: "#ffa500",
    };
  }
  console.log(color);

  return (
    <>
      <div
        className="circulos"
        style={color}
        onClick={() => setBall(!ball)}
      ></div>
    </>
  );
};
