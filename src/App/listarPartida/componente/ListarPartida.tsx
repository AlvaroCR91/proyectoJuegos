import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../App.css";

export const ListarPartida = () => {
  type Partida = { juegoId: number; id: number; name: string; puntos: number };
  type Juego = { id: number; name: string };

  const [lista, setLista] = useState<Partida[]>([]);
  const [juegos, setJuegos] = useState<Juego[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const partidasGuardadas = localStorage.getItem("partidas");
    const partidas = partidasGuardadas ? JSON.parse(partidasGuardadas) : [];
    setLista(partidas);
  }, []);

  useEffect(() => {
    const juegosGuardados = localStorage.getItem("juegos");
    try {
      const parsed = JSON.parse(juegosGuardados || "[]");
      if (Array.isArray(parsed)) {
        setJuegos(parsed);
      }
    } catch (error) {
      console.error("Error al parsear juegos:", error);
    }
  }, []);

  return (
    <div>
      <div className="titulo">
        <h2>Lista de partidas guardadas</h2>
      </div>

      <div className="bloque lista-partidas">
        <ul className="partidas-lista">
          {lista.map((partida) => (
            <li className="partida-item" key={partida.id}>
              <span><strong>ID Partida:</strong> {partida.id}</span>
              <span>
                <strong>Juego:</strong>{" "}
                {juegos.find((j) => j.id === partida.juegoId)?.name || "Desconocido"}
              </span>
              <span><strong>Nombre:</strong> {partida.name}</span>
              <span><strong>Puntos:</strong> {partida.puntos}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="titulo">
        <h2>Lista de juegos guardados</h2>
      </div>
      <div className="bloque lista-partidas">
        <ul className="partidas-lista">
          {juegos.map((juego) => (
            <li className="partida-item" key={juego.id}>
              <span><strong>ID Juego:</strong> {juego.id}</span>
              <span><strong>Nombre:</strong> {juego.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="acciones">
        <button className="boton-volver" onClick={() => navigate("/")}>
          Volver a inicio
        </button>
      </div>

      <div className="acciones">
        <h2>Borrar todo</h2>
        <button
          className="boton-eliminar"
          onClick={() => {
            localStorage.removeItem("partidas");
            setLista([]);
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
    </div>
  );
};
