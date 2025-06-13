import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const EliminarPartida = () => {
  const navigate = useNavigate();

  type Partida = { juegoId: number, id: number; name: string; puntos: number };
  type Juego = {
    id: number;
    name: string;
  };

  const [partidas, setPartidas] = useState<Partida[]>([]);
  const [juegos, setJuegos] = useState(() => {
    try {
      const juegosGuardados = localStorage.getItem("juegos");
      console.log("Juegos guardados:", juegosGuardados);
      const datos = juegosGuardados ? JSON.parse(juegosGuardados) : [];
      return Array.isArray(datos) ? datos : [];
    } catch (e) {
      console.error("Error al cargar juegos desde localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    const partidasGuardadas = localStorage.getItem("partidas");
    const partidas = partidasGuardadas ? JSON.parse(partidasGuardadas) : [];
    setPartidas(partidas);
  }, []);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);


  const eliminarPartida = (id: number) => {
    const partidasActualizadas = partidas.filter(
      (partida) => partida.id !== id
    );
    localStorage.setItem("partidas", JSON.stringify(partidasActualizadas));
    setPartidas(partidasActualizadas);
  };

  const eliminarJuego = (id: number) => {
    const juegosActualizados = juegos.filter((juegos) => juegos.id !== id);
    localStorage.setItem("juegos", JSON.stringify(juegosActualizados));
    setPartidas(juegosActualizados);
  }

  return (
    <div>
      <div>
        <div className="titulo">
          <h2>Elija la partida que desee eliminar</h2>
        </div>
        <div className="bloque lista-partidas">
          {partidas.map((partida: Partida) => (
            <li className="partida-item" key={partida.id}>
              ID: {partida.id}, Nombre: {partida.name}, Puntos: {partida.puntos}
              <button
                className="boton-eliminar"
                onClick={() => {
                  eliminarPartida(partida.id);
                  alert(`Partida con ID ${partida.id} eliminada.`);
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
      </div>
      </div>
            <div>
        <div className="titulo">
          <h2>Elija el juego que desee eliminar</h2>
        </div>
        <div className="bloque lista-partidas">
          {juegos.map((juego: Juego) => (
            <li className="partida-item" key={juego.id}>
              ID: {juego.id}, Nombre: {juego.name}
              <button
                className="boton-eliminar"
                onClick={() => {
                  eliminarJuego(juego.id);
                  alert(`Juego con ID ${juego.id} eliminada.`);
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
      </div>
      </div>
      <div>
        <h2>Borrar todo</h2>
        <button
          className="boton-eliminar"
          onClick={() => {
            localStorage.removeItem("partidas");
            setPartidas([]);
            alert("Todas las partidas han sido eliminadas.");
          }}
        >
          Borrar todas las partidas
        </button>
          <button
          className="boton-eliminar"
          onClick={() => {
            localStorage.removeItem("juegos");
            setJuegos([]);
            alert("Todos los juegos han sido eliminados.");
          }}
        >
          Borrar todos los juegos
        </button>
      </div>
      <br />
      <div>
        <button className="boton-volver" onClick={() => navigate("/")}>Volver a inicio</button>
      </div>
    </div>
  );
};
