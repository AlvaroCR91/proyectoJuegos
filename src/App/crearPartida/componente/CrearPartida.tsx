import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export const CrearPartida = () => {
  type Partida = {
    juegoId: number;
    id: number;
    name: string;
    puntos: number;
  };

  const [partida, setPartida] = useState<Partida>({
    juegoId:0 ,
    id: 1,
    name: "",
    puntos: 0,
  });
  const [partidas, setPartidas] = useState<Partida[]>(() => {
    const partidasGuardadas = localStorage.getItem("partidas");
    return partidasGuardadas ? JSON.parse(partidasGuardadas) : [];
  });

const [juegos] = useState(() => {
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

console.log("Juegos disponibles:", localStorage.getItem("juegos"));


  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("partidas", JSON.stringify(partidas));
  }, [partidas]);

  return (
    <div>
      <div className="titulo">
        <h2>Guardar datos de tus partidas</h2>
      </div>
      <div className="bloque">
        <form
          className="formulario"
          onSubmit={(e) => {
            e.preventDefault();
            const idExistente = partidas.some((p) => p.id === partida.id && p.name === partida.name);
            if (partida.juegoId < 0) {
              alert("Por favor, seleccione un juego.");
              return;
            }
            if (partida.name.trim() === "") {
              alert("Por favor, ingrese un nombre para la partida.");
              return;
            }
            if (partida.puntos < 0) {
              alert("Los puntos no pueden ser negativos.");
              return;
            }
            if (partida.id < 0) {
              alert("El ID no puede ser negativo.");
              return;
            }

            if (idExistente) {
              alert("El ID ya existe, por favor ingrese un ID diferente.");
              return;
            }
            if (partida.id === 0) {
              partida.id = partidas.length > 0 ? Math.max(...partidas.map(p => p.id)) + 1 : 1;
            }


            const nuevasPartidas = [...partidas, partida];
            setPartidas(nuevasPartidas);
            localStorage.setItem("partidas", JSON.stringify(nuevasPartidas));

            setPartida({ juegoId: NaN, id: partida.id + 1, name: "", puntos: 0 });
          }}
        >
          <div className="form-group">
            <label className="form-label">Juego:</label>
            <select
              className="form-input"
              value={partida.juegoId === 0 ? "" : partida.juegoId}
              onChange={(e) =>
                setPartida({ ...partida, juegoId: parseInt(e.target.value) || 0 })
              }
            >
              <option value="">Seleccione un juego</option>
              {juegos.map((juego: { id: number; name: string }) => (
                <option key={juego.id} value={juego.id}>
                  {juego.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="form-label">ID Partida:</label>
            <input
              type="number"
              className="form-input"
              value={partida.id}
              onChange={(e) =>
                setPartida({ ...partida, id: parseInt(e.target.value) })
              }
            />
          </div>

          <div className="form-group">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-input"
              value={partida.name}
              onChange={(e) => setPartida({ ...partida, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Puntos:</label>
            <input
              type="number"
              className="form-input"
              value={partida.puntos}
              onChange={(e) =>
                setPartida({ ...partida, puntos: parseInt(e.target.value) })
              }
            />
          </div>

          <button className="boton-accion" type="submit">
            Crear Partida
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button className="boton-volver" onClick={() => navigate("/")}>
            Volver a inicio
          </button>
        </div>
      </div>
    </div>
  );
};
