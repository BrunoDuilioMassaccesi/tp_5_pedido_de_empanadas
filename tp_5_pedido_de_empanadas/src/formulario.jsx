import {useState} from 'react';

function formulario({pedidos, setPedidos})
{
    const [nombre, setNombre] = useState('');
    const [sector, setSector] = useState('');
    const [gustos, setGustos] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [gustos2, setGustos2] = useState('');
    const [cantidad2, setCantida2] = useState('');

    const manejarEnvio = (e) => 
    {
        e.preventDefault();

        if(nombre == "" || sector == "" || gustos == "" || cantidad == "" || gustos2 == "" || cantidad2 == "")
        {
          alert("Todos los campos son obligatorios")
          return;
        }
    }

    const nuevoPedido = {
      Nombre: Nombre,
      Sector: Sector,
      Gustos: Gustos,
      Cantidad: Cantidad,
      Gustos2: Gustos2,
      Cantidad2: Cantidad2
    };

    const copia = pedidos.slice(); 
    copia.push(nuevoPedido); 
    setPedidos(copia); 

    setNombre('');
    setSector('');
    setGustos('');
    setCantidad('');
    setGustos2('');
    setCantida2('');




    return (
      <div className="one-half column">
        <h2>Crear mi pedido</h2>
        <form onSubmit={manejarEnvio}>
          <label>Nombre</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
          <label>Sector de la empresa</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Sector de la empresa"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          />
          <label>gustos</label>
          <input
            type="text"
            className="u-full-width"
            value={gustos}
            onChange={(e) => setGustos(e.target.value)}
          />
          <button type="submit" className="u-full-width button-primary">
            Agregar pedido
          </button>
        </form>
      </div>
    );
  }

  export default formulario;