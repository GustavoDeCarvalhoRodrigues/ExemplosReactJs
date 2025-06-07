import { useState } from 'react';
let seila = 0; // Variável para contar quantas vezes a lâmpada foi ligada
let maximo = 5; // Máximo de vezes que a lâmpada pode ser ligada
export default function Home() {

  const [lampadaLigada, setLampadaLigada] = useState(false);
  const [interruptor, setInterruptor] = useState(false);

  //#region Funções da Lâmpada


  function ligarlampada() {
    setLampadaLigada(true);
  }

  function desligarlampada() {
    if (seila >= maximo) {
      alert("A lâmpada está quebrada!");
      return;
    }
    setLampadaLigada(false);
  }
  //#endregion
  function toggleLampada() {
    setInterruptor(!interruptor);

    if (seila >= maximo && lampadaLigada) {
      alert("A lâmpada está quebrada!");
      return;
    }

    if (lampadaLigada) {
      seila++;
      if (seila > maximo) {
        return;
      }
    }

    setLampadaLigada(!lampadaLigada);
  }

  return (
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center">Lâmpada on/off</h1>
          <div className="text-center mb-4">
            <img src={lampadaLigada ? (seila < maximo ? "assets/on.png" : "assets/quebrada.png") : "/assets/off.png"} alt="Lâmpada" className="img-fluid" />
          </div>
          <div className="text-center">

            <button className="btn btn-light" onClick={ligarlampada}>Ligar</button>
            <button className="btn btn-dark" onClick={desligarlampada}>Desligar</button>

            <button className="btn btn-secondary" onClick={toggleLampada} style={{ border: 'none', background: 'none' }}><img src={interruptor ? "assets/ligada.png" : "/assets/desligada.png"} alt="Toggle" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
