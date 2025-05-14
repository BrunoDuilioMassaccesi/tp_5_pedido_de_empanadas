function Pedidos({ datos, eliminarPedido, indice }) {
    return (
      <div className="pedido">
        <p>Nombre: <span>{datos.Nombre}</span></p>
        <p>Sector: <span>{datos.Sector}</span></p>
        <p>Gustos: <span>{datos.Gustos}</span></p>
        <p>Cantidad: <span>{datos.Cantidad}</span></p>
        <p>Gustos2: <span>{datos.Gustos2}</span></p>
        <p>Cantidad2: <span>{datos.Cantidad2}</span></p>
        <button
          className="button eliminar u-full-width"
          onClick={() => eliminarCita(indice)}
        >
          Eliminar ×
        </button>
      </div>
    );
  }
  
  export default Pedidos;