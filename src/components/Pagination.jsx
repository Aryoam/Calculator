import { useState } from "react";
import "../css/pagination.css";

export const Pagination = () => {
  const [variable, setVariable] = useState(0);
  const paginas = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const alerta = (e) => {
    alert(e.target.value);
  };

  const handlePage = (e) => {
    if (e.target.className === "back" && variable > 0) {
      setVariable(variable - 1);
    } else if (e.target.className === "next" && variable < 15) {
      setVariable(variable + 1);
    } else console.log("fhjbd");
  };

  return (
    <>
      <button className="back" onClick={handlePage}></button>
      <button onClick={alerta} value={paginas[variable]}>
        {paginas[variable]}
      </button>
      <button onClick={alerta} value={paginas[variable + 1]}>
        {paginas[variable + 1]}
      </button>
      <button onClick={alerta} value={paginas[variable + 2]}>
        {paginas[variable + 2]}
      </button>
      <button onClick={alerta} value={paginas[variable + 3]}>
        {paginas[variable + 3]}
      </button>
      <button onClick={alerta} value={paginas[variable + 4]}>
        {paginas[variable + 4]}
      </button>
      <button className="next" onClick={handlePage}></button>
    </>
  );
};
