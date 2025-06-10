import { useState } from 'react';
let seila = 0; // Variável para contar quantas vezes a lâmpada foi ligada
let maximo = 5; // Máximo de vezes que a lâmpada pode ser ligada
let clicksPoint = 1; // Contador de cliques
export default function Home() {

  const [lampadaLigada, setLampadaLigada] = useState(false);
  const [interruptor, setInterruptor] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [upgrade, setUpgrade] = useState(50); // Estado para o upgrade da lâmpada
  const [upgradeClicks, setUpgradeClicks] = useState(50); // Estado para o upgrade dos cliques
  //#region Funções da Lâmpada

  //#region Ligar/Desligar
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

  function clicksIncrement() {
    setClicks(clicks + clicksPoint);
  }

  function restartLampada() {
    if (clicks < 100) {
      alert("Você precisa de 100 cliques para reiniciar a lâmpada!");
      return;
    }
    setInterruptor(!interruptor); // Reseta o estado do interruptor
    setLampadaLigada(interruptor); // Desliga a lâmpada
    toggleLampada(); // Alterna o estado da lâmpada
    seila = 0; // Reseta o contador de vezes que a lâmpada foi ligada
    setClicks(clicks - 100); // Reseta os cliques
    alert("Lâmpada reiniciada!");
  }
  function upgradeLampada() {
    if (clicks < upgrade) {
      alert(`Você precisa de ${upgrade} cliques para melhorar a lâmpada!`);
      return;
    }
    setClicks(clicks - upgrade); // Deduz os cliques necessários
    setUpgrade(upgrade + 50); // Aumenta o custo do upgrade
    if (seila >= maximo) {
      maximo += 5; // Aumenta o máximo de vezes que a lâmpada pode ser ligada
      seila = maximo; // Reseta o contador de vezes que a lâmpada foi ligada
      alert("Lâmpada melhorada!");
      return;
    }
    maximo += 5; // Aumenta o máximo de vezes que a lâmpada pode ser ligada
    // Reseta o contador de vezes que a lâmpada foi ligada
    alert("Lâmpada melhorada!");
  }
  function fupgradeClicks() {
    if (clicks < upgradeClicks) {
      alert(`Você precisa de ${upgradeClicks} cliques para melhorar a quantidade de cliques!`);
      return;
    }
    setClicks(clicks - upgradeClicks); // Deduz os cliques necessários
    clicksPoint += 1; // Aumenta a quantidade de cliques por ação
    setUpgradeClicks(upgradeClicks + 50); // Aumenta o custo do upgrade
    alert("Quantidade de cliques melhorada!");
  }

  return (
    <div className="container-fluid" >
      <div className="row d-flex flex-column">
        <div className="col-md-8 offset-md-2 d-flex">
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center">Lâmpada on/off</h1>
            <div className="">
              <h1 className="text-center">Clicks: {clicks}</h1>
            </div>
            <div className="text-center mb-4 ">
              <button onClick={clicksIncrement}><img src={lampadaLigada ? (seila < maximo ? "assets/on.png" : "assets/quebrada.png") : "/assets/off.png"} alt="Lâmpada" className="img-fluid" /></button>
            </div>
            <div className="text-center">

              <button className="btn btn-light" onClick={ligarlampada}>Ligar</button>
              <button className="btn btn-dark" onClick={desligarlampada}>Desligar</button>

              <button className="btn btn-secondary" onClick={toggleLampada} style={{ border: 'none', background: 'none' }}><img src={interruptor ? "assets/ligada.png" : "/assets/desligada.png"} alt="Toggle" /></button>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center">Compre uma nova lampada por <br />100 Clicks</h1>
            <div className="text-center mb-4">
              <button onClick={restartLampada}><img src={"/assets/off.png"} alt="Lâmpada" className="img-fluid" /></button>
            </div>
            <h1 className="text-center">Melhore sua lâmpada por {upgrade} Clicks</h1>
            <div className="text-center">
              <button className="btn btn-primary" onClick={upgradeLampada}>Upgrade</button>
            </div>
          </div>
          <h1 className="text-center">Melhore a quantidade de cliques por {upgradeClicks} Clicks</h1>
          <div className="text-center">
            <button className="btn btn-primary" onClick={fupgradeClicks}>Upgrade</button>
          </div>
        </div>
      </div>
    </div>


  );
}
