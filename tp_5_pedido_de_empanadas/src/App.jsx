import Formulario from './formulario';
import ListadoCitas from './pedido';
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([]);

  const eliminarCita = (indice) => {
    const nuevasCitas = citas.filter((_, i) => i !== indice);  //nos ayudaron a hacerlo e invesgigamos en google ya que no conociamos como se hacia
    setCitas(nuevasCitas);
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <Formulario setCitas={setCitas} citas={citas} />
        <ListadoCitas citas={citas} eliminarCita={eliminarCita} />
      </div>
    </>
  );
}

export default App;