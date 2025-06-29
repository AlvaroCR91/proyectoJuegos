import './App.css'
import { Link, Routes, Route  } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "../componentes/Card";
import { CrearPartida } from "./crearPartida/componente/CrearPartida";
import { ModificarDatos } from "./editarPartida/componentes/ModificarDatos";
import { ListarPartida } from "./listarPartida/componente/ListarPartida";
import { EliminarPartida } from "./eliminarPartida/componente/EliminarPartida";
import { CrearJuego } from './crearJuego/componente/CrearJuego';


const App: React.FC = () => {

  const indices = [
    { id:0, name: 'Añadir Juego', descripcion: 'Añadir un nuevo juego a tu lista de juegos.', href: '/crearJuego' },
    { id: 1, name: 'Guardar datos de tus partidas', descripcion: 'Añade las partidas de los juegos que has jugado.', href: '/crearPartida' },
    { id: 2, name: 'Lista de partidas y Juegos', descripcion: 'Listar tus partidas y juegos guardados.', href: '/listarPartida' },
    { id: 3, name: 'Editar partidas', descripcion: 'Editar partidas.', href: '/editarPartida' },
    { id: 4, name: 'Eliminar partida o juego', descripcion: 'Eliminar partida o juego guardado.', href: '/eliminarPartida' },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="titulo">
            <h2>Bienvenido a tu gestor de partidas guardadas</h2>
          <div className="contenedor-cards">
            {indices.map((indice) => (
              <Link key={indice.id} to={indice.href} style={{ textDecoration: "none" }}>
                <Card>
                  <CardHeader>
                    <CardTitle>{indice.name}</CardTitle>
                  </CardHeader>
                  <CardContent>{indice.descripcion}</CardContent>
                </Card>
              </Link>
            ))}
          </div>
          </div>
        }
      />
      <Route path="/crearPartida" element={<CrearPartida />} />
      <Route path="/listarPartida" element={<ListarPartida />} />
      <Route path="/editarPartida" element={<ModificarDatos />} />
      <Route path="/eliminarPartida" element={<EliminarPartida />} />
      <Route path="/crearJuego" element={<CrearJuego />} />
    </Routes>
  );
};

export default App;