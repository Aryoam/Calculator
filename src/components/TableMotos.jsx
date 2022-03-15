import { Table } from "react-bootstrap";

export const TableMotos = () => {
  const arrayMotos = [
    {
      id: 1,
      model: "YAMAHA X-MAX 250",
      preu: 1300,
      kilometres: 68000,
      cilindrada: 249,
      lloc: "Barcelona",
      any: 2007,
    },
    {
      id: 2,
      model: "SUZUKI BURGMAN 200",
      preu: 1200,
      kilometres: 45000,
      cilindrada: 200,
      lloc: "Barcelona",
      any: 2007,
    },
  ];

  let motos = arrayMotos.map(
    ({ id, model, preu, kilometres, cilindrada, lloc, any }, index) => {
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{model}</td>
          <td>{preu}</td>
          <td>{kilometres}</td>
          <td>{cilindrada}</td>
          <td>{lloc}</td>
          <td>{any}</td>
        </tr>
      );
    }
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Kilometros</th>
          <th>Cilindrada</th>
          <th>Localización</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody>{motos}</tbody>
    </Table>
  );
};
