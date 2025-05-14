import Pedido from './pedido';

function ListadoPedidos({ pedidos }) {
  const resumenGustos = {};

  pedidos.forEach(pedido => {
    pedido.empanadas.forEach(({ gusto, cantidad }) => {
      resumenGustos[gusto] = (resumenGustos[gusto] || 0) + cantidad;
    });
  });

  return (
    <div className="listados">
      <div className="resumen-gustos">
        <h2>Total por Gusto</h2>
        <ul>
          {Object.entries(resumenGustos).map(([gusto, total], i) => (
            <li key={i}>{gusto}: {total}</li>
          ))}
        </ul>
      </div>
      <div className="lista-personas">
        <h2>Pedidos Individuales</h2>
        {pedidos.map((p, i) => (
          <Pedido key={i} datos={p} />
        ))}
      </div>
    </div>
  );
}

export default ListadoPedidos;
