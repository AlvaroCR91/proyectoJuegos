import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export const CrearJuego = () => {
  type Juego = {
    id: number;
    name: string;
  };

  const [juego, setJuego] = useState<Juego>({
    id: 1,
    name: ""
  });
    const juegosGuardados = localStorage.getItem("juegos");
    console.log("Juegos guardados:", juegosGuardados);
    let juegos: Juego[] = [];

    try {
    const parsed = JSON.parse(juegosGuardados || "[]");
    if (Array.isArray(parsed)) {
        juegos = parsed;
    }
    } catch (error) {
    console.error("Error al parsear juegos:", error);
    }

  const navigate = useNavigate();


return(
<div>
    <div className="titulo">
        <h2>Crear Juego</h2>
    </div>
    <div className="bloque">
        <form
            className="formulario"
            onSubmit={(e) => {
                e.preventDefault();
                const idExistente = juegos.some((j) => j.id === juego.id);

                if (idExistente) {
                    alert("El ID ya existe, por favor ingrese un ID diferente.");
                    return;
                }
                const nuevosJuegos = [...juegos, juego];
                setJuego({ id: juego.id + 1, name: "" });
                localStorage.setItem("juegos", JSON.stringify(nuevosJuegos));
            }}
        >
            <div className="form-group">
                <label className="form-label">ID:</label>
                <input
                    type="number"
                    className="form-input"
                    value={juego.id}
                    onChange={(e) =>
                        setJuego({ ...juego, id: parseInt(e.target.value) })
                    }
                />
            </div>
            <div className="form-group">
                <label className="form-label">Nombre del Juego:</label>
                <input
                    type="text"
                    className="form-input"
                    value={juego.name}
                    onChange={(e) =>
                        setJuego({ ...juego, name: e.target.value })
                    }
                />
            </div>
            <button type="submit" className="boton-crear">
                Crear Juego
            </button>
        </form>

    </div>
    <div className="acciones">
        <button className="boton-volver" onClick={() => navigate("/")}>
          Volver a inicio
        </button>
    </div>
</div>
)
};