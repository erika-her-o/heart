import Corazon from "./Corazon";
import { corazones } from "./recursos/corazones";
import "./styles.css";
import { useState } from "react";

console.clear();

export default function App() {
  const [listaCorazones, actualizadorListaCorazones] = useState(corazones);

  const calcularCorazonesRotos = () => {
    let contador = 0;
    listaCorazones.forEach((corazon) => {
      if (corazon.roto) {
        contador++;
      }
    });
    return contador;
  };

  const manejadorClick = (corazonActual) => {
    console.log(corazonActual);

    let corazonesLista = listaCorazones.map((corazon) => {
      if (corazon.id === corazonActual.id) {
        return {
          id: corazonActual.id,
          roto: !corazonActual.roto
        };
      }
      return corazon;
    });

    actualizadorListaCorazones(corazonesLista);
  };

  return (
    <div className="App">
      <h1>Hay {calcularCorazonesRotos()} corazones rojos</h1>
      <div className="corazones-wrap">
        {listaCorazones.map((corazon) => {
          return (
            <Corazon
              click={() => manejadorClick(corazon)}
              roto={corazon.roto}
              key={corazon.id}
            />
          );
        })}
      </div>
    </div>
  );
}
