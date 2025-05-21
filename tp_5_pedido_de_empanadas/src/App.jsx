import { useState } from 'react';
import Formulario from './formulario';
import ListadoPedidos from './listadoPedidos';
import './App.css'

function App() {
  const [pedidos, setPedidos] = useState([]);

  return (
    <div className="App">
      <h1 class="titulo">Pedido de Empanadas</h1>
      <div className="container">
        <Formulario pedidos={pedidos} setPedidos={setPedidos} />
        <ListadoPedidos pedidos={pedidos} />
      </div>
    </div>
  );
}

export default App;
