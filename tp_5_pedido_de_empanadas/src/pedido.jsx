function Pedido({ datos }) {
  return (
    <div className="pedido">
      <p><strong>Nombre:</strong> {datos.nombre}</p>
      <p><strong>Sector:</strong> {datos.sector}</p>
      <p><strong>Empanadas:</strong></p>
      <ul>
        {datos.empanadas.map((emp, index) => (
          <li key={index}>{emp.cantidad} de {emp.gusto}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pedido;
