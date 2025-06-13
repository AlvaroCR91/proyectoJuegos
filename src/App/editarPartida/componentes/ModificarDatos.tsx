import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export const ModificarDatos = () => {
  const navigate = useNavigate();

  type Partida = { id: number; name: string; puntos: number };
  
    const [partidas, setPartidas] = useState<Partida[]>([]);
  
    useEffect(() => {
      const partidasGuardadas = localStorage.getItem("partidas");
      const partidas = partidasGuardadas ? JSON.parse(partidasGuardadas) : [];
      setPartidas(partidas);
    }, []);

  return (
    <div>
      <div className="titulo">
        <h2>Elija la partida que desee editar</h2>
      </div>
      <div className="bloque lista-partidas">
        {partidas.map((partida: Partida) => (
          <li className="partida-item" key={partida.id}>
            ID: {partida.id}, Nombre: {partida.name}, Puntos: {partida.puntos}
            <button
              onClick={() => {
                const nuevoNombre = prompt("Ingrese el nuevo nombre de la partida:", partida.name);
                const nuevosPuntos = prompt("Ingrese los nuevos puntos de la partida:", String(partida.puntos));
                
                if (nuevoNombre !== null && nuevosPuntos !== null) {
                  const partidasActualizadas = partidas.map(p =>
                    p.id === partida.id ? { ...p, name: nuevoNombre, puntos: Number(nuevosPuntos) } : p
                  );
                  localStorage.setItem("partidas", JSON.stringify(partidasActualizadas));
                  setPartidas(partidasActualizadas);
                  alert(`Partida con ID ${partida.id} actualizada.`);
                }
              }}
            >
              Editar
            </button>
          </li>
        ))}
      </div>
      <div className="acciones">
        <button className="boton-volver" onClick={() => navigate("/")}>Volver a inicio</button>
      </div>
    </div>
  )
};