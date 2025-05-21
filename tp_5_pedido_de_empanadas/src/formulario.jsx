import { useState } from 'react';


function Formulario({ pedidos, setPedidos }) {
  const [nombre, setNombre] = useState('');
  const [sector, setSector] = useState('');
  const [empanadas, setEmpanadas] = useState([{ gusto: '', cantidad: '' }]);

  const manejarCambioEmpanada = (index, campo, valor) => {
    const nuevasEmpanadas = [...empanadas];
    nuevasEmpanadas[index][campo] = valor;
    setEmpanadas(nuevasEmpanadas);
  };

  const agregarOtraEmpanada = () => {
    setEmpanadas([...empanadas, { gusto: '', cantidad: '' }]);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!nombre || !sector || empanadas.some(e => !e.gusto || !e.cantidad)) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevoPedido = {
      nombre,
      sector,
      empanadas: empanadas.map(e => ({
        gusto: e.gusto,
        cantidad: parseInt(e.cantidad)
      }))
    };

    setPedidos([...pedidos, nuevoPedido]);
    setNombre('');
    setSector('');
    setEmpanadas([{ gusto: '', cantidad: '' }]);
  };

  return (
    <div className="formulario">
      <h2>Crear Pedido</h2>
      <form onSubmit={manejarEnvio}>
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />

        <label>Sector</label>
        <select value={sector} onChange={e => setSector(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="Sistemas">Sistemas</option>
          <option value="Finanzas">Finanzas</option>
          <option value="Ventas">Ventas</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
          <option value="Soporte">Soporte</option>
          <option value="Depósito">Depósito</option>
        </select>

        <label>Empanadas</label>
        {empanadas.map((emp, i) => (
          <div key={i} className="empanada">
            <input type="text" placeholder="Gusto" value={emp.gusto}
              onChange={e => manejarCambioEmpanada(i, 'gusto', e.target.value)} />
            <input type="number" placeholder="Cantidad" value={emp.cantidad}
              onChange={e => manejarCambioEmpanada(i, 'cantidad', e.target.value)} />
          </div>
        ))}

        <button class="btnAgregar" type="submit" onClick={agregarOtraEmpanada}>Agregar otra empanada</button>
        <button class="btnAgregar" type="submit">Enviar pedido</button>
      </form>
    </div>
  );
}

export default Formulario;
