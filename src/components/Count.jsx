import { useState } from "react";

export const Count = () => {
  const [valor, setValor] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          if (valor > 0) {
            setValor(valor - 1);
          }
        }}
      >
        -
      </button>
      <input type="text" value={valor} disabled />
      <button
        onClick={() => {
          if (valor < 10) {
            setValor(valor + 1);
          }
        }}
      >
        +
      </button>
    </>
  );
};
