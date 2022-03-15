import React from "react";

export const Calendar = ({ month, year }) => {
  let mes = month.toUpperCase();

  if (mes === "ENERO") {
    let dias = new Array(
      "",
      "",
      "",
      "",
      "",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }
  return (
    <thead>
      <tr>
        <td>{month.charAt(0).toUpperCase() + month.slice(1)}</td>
      </tr>
      <tr>
        <td>Dom</td>
        <td>lun</td>
        <td>Mar</td>
        <td>Mie</td>
        <td>Jue</td>
        <td>Vie</td>
        <td>Sab</td>
      </tr>
      <tr></tr>
    </thead>
  );
};
