import { useState } from 'react';

function App() {

  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    estudios: false
  })

  function cambioNombre(e) {
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value,
    }))
  }

  function cambioEdad(e) {
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value,
    }))
  }

  function cambioEstudio(e) {
    setDatos((valores) => ({
      ...valores,
      estudios: !datos.estudios,
    }))
  }

  function procesar(e) {
    e.preventDefault();
    alert('Dato cargado ' + datos.nombre + ' ' 
      +datos.edad + ' ' 
      +datos.estudios);
  }
  
  return (
    <div>
      <center>
      <h1>Ingreso de datos y guardado de estos</h1>
      <hr></hr>
      </center>
      <center>
      <form onSubmit={procesar}>
        <p>Ingrese nombre:<input type="text" value={datos.nombre} onChange={cambioNombre} /></p>
        <p>Ingrese edad:<input type="number" value={datos.edad} onChange={cambioEdad} /></p>
        <p>Estudios:<input type="checkbox" value={datos.estudios} onChange={cambioEstudio} /></p>
        <p><input type="submit" /></p>
      </form>
      <hr />
      <h3>Datos Ingresados</h3>
      <p>Nombre:{datos.nombre}</p>
      <p>Edad:{datos.edad}</p>
      <p>Estudios:{datos.estudios ? 'con estudios' : 'sin estudios'}</p>
      </center>
    </div>

  );
}

export default App;