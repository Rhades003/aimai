import { useState } from 'react'
import Coin from '../components/coin'
function Game() {
    const [coin, setCoin] = useState(0);
    return (
      <>
        <div>
          <p>{coin}</p>

          <Coin coinName="Moneda Romana" coinImg="https://upload.wikimedia.org/wikipedia/commons/3/35/Roman_denarius_in_silver_%28Maximinus%29-transparent.png" onClick ={() => sumar(100)}></Coin>
          <Coin coinName="Peseta" coinImg="https://upload.wikimedia.org/wikipedia/commons/8/85/100_pesetas.png" onClick ={() => sumar(50)}></Coin>
          <Coin coinName="Dolar Zimbabuense" coinImg="https://upload.wikimedia.org/wikipedia/commons/5/50/Zimbabwe_cent.png" onClick ={() => sumar(-10)}></Coin>
        </div>
      </>
    )

    function sumar(valor:number):void {
      setCoin(a => a + valor);
  }
  }
  
  export default Game;
  